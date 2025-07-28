import { View, Text } from 'react-native';
import TopAppBar from '~/components/TopAppBar';
import FighterIntroduction from './components/FighterIntroduction';
import { useFighterContext } from '../contexts/FighterContext';

const FighterDetailsScreen = () => {
  const { selectedFighter } = useFighterContext();
  return (
    <View className="flex flex-col bg-black w-full h-full">
      <TopAppBar title="Fighter Details" showBackButton={true}/>
      <FighterIntroduction fighter={selectedFighter!!}/>
    </View>
  );
};

export default FighterDetailsScreen;