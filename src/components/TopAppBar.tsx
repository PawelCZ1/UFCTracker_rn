import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface Props {
  title: string;
  showBackButton: boolean;
}

const TopAppBar = ({ title, showBackButton}: Props) => {
  const router = useRouter();

  const onBackPress = () => {
    router.back();
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1f2937"/>
      <SafeAreaView className="bg-black">
        <View className="flex flex-row p-4 h-14 items-center">
          {showBackButton && (
            <TouchableOpacity className="mr-4" onPress={onBackPress}>
              <Feather name={"arrow-left"} size={24} color="#fff"/>
            </TouchableOpacity>
          )}
          <Text className="text-white font-bold text-[18px]">{title}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default TopAppBar;