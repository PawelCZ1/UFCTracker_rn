import React, { useState, useEffect } from 'react';
import { Image, ImageProps, ActivityIndicator, View } from 'react-native';
import ImageCache from '../utils/imageCache';

interface CacheImageProps extends Omit<ImageProps, 'source'> {
  source: { uri: string };
  showLoader?: boolean;
  loaderColor?: string;
  loaderSize?: 'small' | 'large';
}

export const CacheImage: React.FC<CacheImageProps> = ({
  source,
  showLoader = true,
   loaderColor = '#fff',
   loaderSize = 'large',
   onLoadStart, onLoadEnd,
   onError,
   ...props
}) => {
  const [cachedUri, setCachedUri] = useState<string>(source.uri);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadCachedImage = async () => {
      try {
        setLoading(true);
        setError(false);

        const cached = await ImageCache.getCachedImage(source.uri);
        if (cached && isMounted) {
          setCachedUri(cached);
        } else if (isMounted) {
          // Start caching in background
          ImageCache.cacheImage(source.uri).then((uri) => {
            if (isMounted) {
              setCachedUri(uri);
            }
          });
        }
      } catch (err) {
        console.error('Error loading cached image:', err);
        if (isMounted) {
          setError(true);
        }
      }
    };

    if (source.uri) {
      loadCachedImage();
    }

    return () => {
      isMounted = false;
    };
  }, [source.uri]);

  const handleLoadStart = () => {
    setLoading(true);
    onLoadStart?.();
  };

  const handleLoadEnd = () => {
    setLoading(false);
    onLoadEnd?.();
  };

  const handleError = (event: any) => {
    setLoading(false);
    setError(true);
    onError?.(event);
  };

  return (
    <View style={{ position: 'relative' }}>
      {loading && showLoader && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1
          }}
        >
          <ActivityIndicator size={loaderSize} color={loaderColor} />
        </View>
      )}

      <Image
        {...props}
        source={{ uri: cachedUri }}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
      />
    </View>
  );
};