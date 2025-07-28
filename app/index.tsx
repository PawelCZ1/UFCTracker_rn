import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function Index() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const timeout = setTimeout(() => {
        router.replace('/fighter-list');
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [isMounted, router]);

  return <View className="flex-1 bg-black" />;
}