import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import SplashScreen from '../components/SplashScreen';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/fighter-list');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);

  return <SplashScreen />;
}