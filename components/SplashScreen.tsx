import { Text, View } from 'react-native';

const SplashScreen = () => {
  return (
    <View className="w-full h-full bg-red-700 flex items-center justify-center">
      <Text className="text-white italic font-extrabold text-7xl">UFC</Text>
      <Text className="text-white font-extrabold text-3xl">Tracker</Text>
    </View>
  );
};

export default SplashScreen;