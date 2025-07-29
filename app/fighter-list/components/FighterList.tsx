import { ScrollView, View } from 'react-native';
import { Fighter } from '../../../models/Fighter';
import FighterListItem from './FighterListItem';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useFighterContext } from '../../../contexts/FighterContext';

interface Props {
  fighters: Fighter[];
}

const FighterList = ({fighters}: Props) => {

  const router = useRouter();
  const { setSelectedFighter } = useFighterContext();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleFighterPress = (fighter: Fighter) => {
    if (isNavigating) return;

    setIsNavigating(true);
    setSelectedFighter(fighter);
    router.push(`/fighter-details/${fighter.id}`);

    setTimeout(() => setIsNavigating(false), 500);
  };


  return (
    <View className="bg-white flex-1 w-full h-full items-center">
      <ScrollView className="w-full">
        <View className="flex-1 gap-4 py-4 mx-6">
          {fighters.map((fighter) => (
            <FighterListItem key={fighter.id} fighter={fighter} onPress={handleFighterPress} disabled={isNavigating}/>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FighterList;