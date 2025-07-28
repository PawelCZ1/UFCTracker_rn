import { ScrollView, Text, View } from 'react-native';
import { Fighter } from '../../../models/Fighter';
import FighterListItem from './FighterListItem';

interface Props {
  fighters: Fighter[];
}

const FighterList = ({fighters}: Props) => {
  return (
    <View className="bg-white flex-1 w-full h-full items-center">
      <ScrollView className="w-full">
        <View className="flex-1 gap-4 py-4 mx-6">
          {fighters.map((fighter) => (
            <FighterListItem key={fighter.id} fighter={fighter}/>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FighterList;