import os from 'os';
import fs from 'fs/promises';
import path from 'path';

type CacheScope = 'User' | 'Workspace';

interface CacheContent <T> {
    createdAt: Date;
    updatedAt: Date;
    data: T
};

interface ClearedCacheResult <T> {
    success: boolean;
    data: T;
};

interface CacheMetadata Pick<CacheContent<unknown>, 'createdAt' | 'updatedAt'> {
    createdAt: Date;
    updatedAt: Date;
};

abstract class CacheScheme {
    abstract LocalCachePath: string;
    abstract WorkspaceCachePath: string;

    abstract writeCache(scope: CacheScope, path: string, data: object): Promise<boolean>;
    abstract readCache<T>(scope: CacheScope, path: string): Promise<T | null>;
    abstract clearCache<T>(scope: CacheScope, path?: string): Promise<ClearedCacheResult<T>>;

    abstract localCacheExists(): Promise<boolean>;
    abstract getCachePath(scope: CacheScope, path?: string): string;
    abstract listCache(scope: CacheScope): Promise<string[]>;
    abstract getCacheSize(scope: CacheScope, path?: string): Promise<number>;
    abstract hasCache(scope: CacheScope, path?: string): Promise<boolean>;
    abstract getCacheMetadata(scope: CacheScope, path?: string): Promise<CacheMetadata | null>;
};

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
        this.WorkspaceCachePath = path.join(this.WorkspaceRoot, './forge');
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
}
