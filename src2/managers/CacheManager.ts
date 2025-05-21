import os from 'os';
import fs from 'fs/promises';
import path from 'path';

type CacheScope = 'User' | 'Workspace';

interface CacheContent<T> {
    createdAt: Date;
    updatedAt: Date;
    data: T;
}

interface ClearedCacheResult<T> {
    success: boolean;
    data: T;
}

interface CacheMetadata {
    createdAt: Date;
    updatedAt: Date;
}

abstract class CacheScheme {
    abstract LocalCachePath: string;
    abstract WorkspaceCachePath: string;
    // Main methods
    abstract writeCache(scope: CacheScope, path: string, data: object): Promise<boolean>;
    abstract readCache<T>(scope: CacheScope, path: string): Promise<T | null>;
    abstract clearCache<T>(scope: CacheScope, path?: string): Promise<ClearedCacheResult<T>>;
    // Internal & main methods
    abstract localCacheExists(): Promise<boolean>;
    abstract getCachePath(scope: CacheScope, path?: string): string;
    abstract listCache(scope: CacheScope): Promise<string[]>;
    abstract getCacheSize(scope: CacheScope, path?: string): Promise<number>;
    abstract hasCache(scope: CacheScope, path?: string): Promise<boolean>;
    abstract getCacheMetadata(scope: CacheScope, path?: string): Promise<CacheMetadata | null>;
}

/**
 * Manages local and workspace-specific cache directories.
 * 
 * - Local cache is resolved to the user's home directory.
 * - Workspace cache is inside the project root (`./forge`).
 * 
 * Compatible with Windows, macOS, and Linux via `os.homedir()`.
 */
export class CacheManager extends CacheScheme {
    public LocalCachePath: string;
    public WorkspaceCachePath: string;

    constructor(private WorkspaceRoot: string) {
        super();
        this.LocalCachePath = path.join(os.homedir() || '', '.forge');
        this.WorkspaceCachePath = path.join(this.WorkspaceRoot, '.forge');
    }

    /**
     * Ensures the directory exists, returns true if it exists/was created successfully.
     */
    public async localCacheExists(): Promise<boolean> {
        try {
            await fs.mkdir(this.LocalCachePath, { recursive: true });
            return true;
        } catch (error) {
            console.error(`Failed to ensure local cache directory: ${this.LocalCachePath}`, error);
            return false;
        }
    }

    /**
     * Ensures a workspace cache directory exists
     */
    private async workspaceCacheExists(): Promise<boolean> {
        try {
            await fs.mkdir(this.WorkspaceCachePath, { recursive: true });
            return true;
        } catch (error) {
            console.error(`Failed to ensure workspace cache directory: ${this.WorkspaceCachePath}`, error);
            return false;
        }
    }

    /**
     * Gets the full path for a cache entry
     */
    public getCachePath(scope: CacheScope, cachePath?: string): string {
        const basePath = scope === 'User' ? this.LocalCachePath : this.WorkspaceCachePath;
        
        if (!cachePath) {
            return basePath;
        }

        // Ensure .json extension
        const normalizedPath = cachePath.endsWith('.json') 
            ? cachePath 
            : `${cachePath}.json`;
            
        return path.join(basePath, normalizedPath);
    }

    /**
     * Writes data to cache
     */
    public async writeCache(scope: CacheScope, cachePath: string, data: object): Promise<boolean> {
        try {
            // Ensure base directories exist
            if (scope === 'User') {
                await this.localCacheExists();
            } else {
                await this.workspaceCacheExists();
            }

            const fullPath = this.getCachePath(scope, cachePath);
            
            // Ensure parent directory exists
            const parentDir = path.dirname(fullPath);
            await fs.mkdir(parentDir, { recursive: true });

            // Create cache content with timestamps
            const cacheContent: CacheContent<typeof data> = {
                createdAt: new Date(),
                updatedAt: new Date(),
                data
            };

            // Check if the file already exists to preserve creation date
            if (await this.hasCache(scope, cachePath)) {
                const existingCache = await this.readCache<any>(scope, cachePath);
                if (existingCache && existingCache.createdAt) {
                    cacheContent.createdAt = new Date(existingCache.createdAt);
                }
            }

            // Write the file
            await fs.writeFile(
                fullPath,
                JSON.stringify(cacheContent, null, 2),
                'utf-8'
            );
            
            return true;
        } catch (error) {
            console.error(`Failed to write to cache: ${cachePath}`, error);
            return false;
        }
    }

    /**
     * Reads data from cache
     */
    public async readCache<T>(scope: CacheScope, cachePath: string): Promise<T | null> {
        try {
            const fullPath = this.getCachePath(scope, cachePath);
            const fileContent = await fs.readFile(fullPath, 'utf-8');
            const cacheContent = JSON.parse(fileContent) as CacheContent<T>;
            
            return cacheContent.data;
        } catch (error) {
            // File doesn't exist or can't be read
            return null;
        }
    }

    /**
     * Checks if cache exists at the given path
     */
    public async hasCache(scope: CacheScope, cachePath?: string): Promise<boolean> {
        try {
            const fullPath = this.getCachePath(scope, cachePath);
            await fs.access(fullPath);
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Lists all cache entries in the specified scope
     */
    public async listCache(scope: CacheScope): Promise<string[]> {
        try {
            const basePath = this.getCachePath(scope);
            
            // Recursive function to list all JSON files
            const listJsonFiles = async (dirPath: string, baseDir: string): Promise<string[]> => {
                const entries = await fs.readdir(dirPath, { withFileTypes: true });
                
                const files: string[] = [];
                
                for (const entry of entries) {
                    const fullPath = path.join(dirPath, entry.name);
                    const relativePath = path.relative(baseDir, fullPath);
                    
                    if (entry.isDirectory()) {
                        const nestedFiles = await listJsonFiles(fullPath, baseDir);
                        files.push(...nestedFiles);
                    } else if (entry.isFile() && entry.name.endsWith('.json')) {
                        files.push(relativePath);
                    }
                }
                
                return files;
            };
            
            // Ensure the directory exists before listing
            if (scope === 'User') {
                await this.localCacheExists();
            } else {
                await this.workspaceCacheExists();
            }
            
            return await listJsonFiles(basePath, basePath);
        } catch (error) {
            console.error(`Failed to list cache for scope: ${scope}`, error);
            return [];
        }
    }

    /**
     * Calculates the size of cache in bytes
     */
    public async getCacheSize(scope: CacheScope, cachePath?: string): Promise<number> {
        try {
            const fullPath = this.getCachePath(scope, cachePath);
            
            // Check if it's a directory or file
            const stats = await fs.stat(fullPath);
            
            if (stats.isFile()) {
                return stats.size;
            } else if (stats.isDirectory()) {
                // Recursive function to calculate directory size
                const calculateDirSize = async (dirPath: string): Promise<number> => {
                    const entries = await fs.readdir(dirPath, { withFileTypes: true });
                    
                    let totalSize = 0;
                    
                    for (const entry of entries) {
                        const fullPath = path.join(dirPath, entry.name);
                        
                        if (entry.isDirectory()) {
                            totalSize += await calculateDirSize(fullPath);
                        } else if (entry.isFile()) {
                            const fileStats = await fs.stat(fullPath);
                            totalSize += fileStats.size;
                        }
                    }
                    
                    return totalSize;
                };
                
                return await calculateDirSize(fullPath);
            }
            
            return 0;
        } catch (error) {
            return 0; // Return 0 if path doesn't exist or error occurs
        }
    }

    /**
     * Gets metadata for a cache entry
     */
    public async getCacheMetadata(scope: CacheScope, cachePath?: string): Promise<CacheMetadata | null> {
        try {
            // If no specific path is provided, return null
            if (!cachePath) {
                return null;
            }
            
            const fullPath = this.getCachePath(scope, cachePath);
            const fileContent = await fs.readFile(fullPath, 'utf-8');
            const cacheContent = JSON.parse(fileContent) as CacheContent<unknown>;
            
            return {
                createdAt: new Date(cacheContent.createdAt),
                updatedAt: new Date(cacheContent.updatedAt)
            };
        } catch (error) {
            return null;
        }
    }

    /**
     * Clears cache entries
     */
    public async clearCache<T>(scope: CacheScope, cachePath?: string): Promise<ClearedCacheResult<T>> {
        try {
            const fullPath = this.getCachePath(scope, cachePath);
            
            // If specific cache path is provided, just delete that file
            if (cachePath) {
                // Read the data before deletion for return value
                let data: T | null = null;
                try {
                    data = await this.readCache<T>(scope, cachePath);
                } catch {}
                
                // Remove the file
                await fs.unlink(fullPath);
                
                return {
                    success: true,
                    data: data as T
                };
            } 
            // Otherwise clear the entire cache directory
            else {
                const basePath = scope === 'User' ? this.LocalCachePath : this.WorkspaceCachePath;
                
                // Ensure directory exists (to avoid errors when trying to clear a non-existent directory)
                try {
                    await fs.access(basePath);
                    
                    // Read all files before deletion
                    const entries = await this.listCache(scope);
                    
                    // Remove all content but preserve the directory
                    const dirEntries = await fs.readdir(basePath);
                    
                    for (const entry of dirEntries) {
                        const entryPath = path.join(basePath, entry);
                        const stats = await fs.stat(entryPath);
                        
                        if (stats.isDirectory()) {
                            await fs.rm(entryPath, { recursive: true, force: true });
                        } else {
                            await fs.unlink(entryPath);
                        }
                    }
                } catch {
                    // Directory doesn't exist, create it
                    if (scope === 'User') {
                        await this.localCacheExists();
                    } else {
                        await this.workspaceCacheExists();
                    }
                }
                
                return {
                    success: true,
                    data: {} as T
                };
            }
        } catch (error) {
            console.error(`Failed to clear cache: ${scope}/${cachePath || 'all'}`, error);
            return {
                success: false,
                data: {} as T
            };
        }
    }
}
