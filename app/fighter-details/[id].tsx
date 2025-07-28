import { View, Text } from 'react-native';
import FighterIntroduction from './components/FighterIntroduction';
import TopAppBar from '../../components/TopAppBar';
import { useFighterContext } from '../../contexts/FighterContext';

const FighterDetailsScreen = () => {
  const { selectedFighter } = useFighterContext();
  return (
    <View className="flex flex-col bg-black w-full h-full">
      <TopAppBar title="Fighter Details" showBackButton={true}/>
      <FighterIntroduction fighter={selectedFighter!}/>
    </View>
  );
};

export default FighterDetailsScreen;