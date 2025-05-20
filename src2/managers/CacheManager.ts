import os from 'os';
import fs from 'fs/promises';
import path from 'path';

type CacheScope = 'User' | 'Workspace';

interface ClearedCacheResult<T>{
    success: boolean;
    data: T;
}

abstract class CacheScheme {
    abstract LocalCachePath: string;
    abstract WorkspaceCachePath: string;

    abstract writeCache(scope: CacheScope, path: string, data: object): Promise<boolean>;
    abstract readCache<T>(scope: CacheScope, path: string): Promise<T | null>;
    abstract clearCache<T>(scope: CacheScope, path?: string): Promise<ClearedCacheResult<T>>;

    abstract localCacheExists(): Promise<boolean>;
    abstract getCachePath(scope: CacheScope, path?: string): string;
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
