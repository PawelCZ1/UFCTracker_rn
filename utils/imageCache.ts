import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';

const IMAGE_CACHE_DIR = `${FileSystem.cacheDirectory}images/`;

class ImageCache {
  private static instance: ImageCache;
  private cache = new Map<string, string>();

  static getInstance(): ImageCache {
    if (!ImageCache.instance) {
      ImageCache.instance = new ImageCache();
    }
    return ImageCache.instance;
  }

  private async ensureCacheDir(): Promise<void> {
    const dirInfo = await FileSystem.getInfoAsync(IMAGE_CACHE_DIR);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(IMAGE_CACHE_DIR, { intermediates: true });
    }
  }

  private getCacheKey(url: string): string {
    return url.replace(/[^a-zA-Z0-9]/g, '_') + '.jpg';
  }

  async getCachedImage(url: string): Promise<string | null> {
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    const cacheKey = this.getCacheKey(url);
    const localPath = `${IMAGE_CACHE_DIR}${cacheKey}`;

    const fileInfo = await FileSystem.getInfoAsync(localPath);
    if (fileInfo.exists) {
      this.cache.set(url, localPath);
      return localPath;
    }

    return null;
  }

  async cacheImage(url: string): Promise<string> {
    const cachedPath = await this.getCachedImage(url);
    if (cachedPath) {
      return cachedPath;
    }

    await this.ensureCacheDir();

    const cacheKey = this.getCacheKey(url);
    const localPath = `${IMAGE_CACHE_DIR}${cacheKey}`;

    try {
      await FileSystem.downloadAsync(url, localPath);
      this.cache.set(url, localPath);
      return localPath;
    } catch (error) {
      console.error('Failed to cache image:', error);
      return url; // Fallback to original URL
    }
  }

  async clearCache(): Promise<void> {
    try {
      await FileSystem.deleteAsync(IMAGE_CACHE_DIR, { idempotent: true });
      this.cache.clear();
    } catch (error) {
      console.error('Failed to clear image cache:', error);
    }
  }
}

export default ImageCache.getInstance();