// Local modules
import { FileSystem } from "./FileSystem";

/**
 * A type representing available caching scopes.
 */
type CacheScope = 'user' | 'workspace';

/**
 * An interface representing the content of a cache file object.
 */
interface CacheContent<T> {
  updatedAt: Date;
  data: T;
}

/**
 * An interface representing the metadata of a cache file.
 */
interface CacheMetadata {
  updatedAt: Date;
}

/**
 * An interface representing the CacheManager class.
 */
interface CacheScheme {
  WriteCache?<T>(
    scope: CacheScope,
    path: string,
    data: CacheContent<T>
  ): Promise<boolean>

  ReadCache?<T>(
    scope: CacheScope,
    path: string
  ): Promise<CacheContent<T> | null>

  ClearCache?(
    scope: CacheScope,
    path: string,
    deleteFile?: boolean, // Default: False
  ): Promise<boolean>

  CacheExists?<T>(
    scope: CacheScope,
    path: string
  ): Promise<boolean>;

  SetCacheExpiry?<T>(
    scope: CacheScope,
    path: string,
    expiryTime: number
  ): Promise<boolean>;

  ClearAllCache?(
    scope: CacheScope,
    deleteFiles?: boolean
  ): Promise<boolean>;
}

/**
 * A class to manage local and workspace-located cache.
 */
export class CacheManager implements CacheScheme {
  public static async WriteCache<T>(
    scope: CacheScope,
    data: T,
    path?: string
  ): Promise<boolean> {
    // Example implementation: write cache data to a file using FileSystem
    try {
      const cacheContent: CacheContent<T> = {
        updatedAt: new Date(),
        data: data
      };
      const filePath = path || (scope === 'user' ? './user-cache.json' : './workspace-cache.json');
      await FileSystem.WriteFile(filePath, JSON.stringify(cacheContent));
      return true;
    } catch (error) {
      // Handle error (e.g., log it)
      return false;
    }
  }
}
