import { View, Text } from 'react-native';
import TopAppBar from '~/components/TopAppBar';

const FighterDetailsScreen = () => {
  return (
    <View className="flex flex-col bg-black w-full h-full">
      <TopAppBar title="Details" showBackButton={true}/>
      <Text>User Details</Text>
    </View>
  );
};

export default FighterDetailsScreen;