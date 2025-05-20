import os from 'os';
import fs from 'fs/promises';
import path from 'path';

/**
 * Manages local and workspace-specific cache directories.
 * 
 * - Local cache is resolved to the user's home directory.
 * - Workspace cache is inside the project root (`./forge`).
 * 
 * Compatible with Windows, macOS, and Linux via `os.homedir()`.
 */
export class CacheManager {
    private LocalCachePath: string;
    private WorkspaceCachePath: string;

    constructor(private WorkspaceRoot: string): {
        this.LocalCachePath = os.homedir() || '';
        this.WorkspaceCachePath = path.join(this.WorkspaceRoot, './forge');
    };
};
