import { View, Text, ScrollView } from 'react-native';
import FighterIntroduction from './components/FighterIntroduction';
import TopAppBar from '../../components/TopAppBar';
import { useFighterContext } from '../../contexts/FighterContext';
import FighterBioSection from './components/FighterBioSection';
import { VerticalSpacer } from '../../components/VerticalSpacer';
import FighterProfileSection from './components/FighterProfileSection';

const FighterDetailsScreen = () => {
  const { selectedFighter } = useFighterContext();
  return (
    <View className="bg-black w-full h-full">
      <TopAppBar title="Fighter Details" showBackButton={true}/>
      <ScrollView>
        <FighterIntroduction fighter={selectedFighter!}/>
        <VerticalSpacer size={16}/>
        <FighterBioSection fighter={selectedFighter!}/>
        <VerticalSpacer size={16}/>
        <FighterProfileSection fighter={selectedFighter!}/>
      </ScrollView>
    </View>
  );
};

export default FighterDetailsScreen;