import { Stack } from 'expo-router';
import { FighterProvider } from './contexts/FighterContext';

const RootLayout = () => {
  return (
    <FighterProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="fighter-details/[id]" />
      </Stack>
    </FighterProvider>
  );
};

export default RootLayout;