import { ScrollView, Text, View } from 'react-native';
import { Fighter } from '~/models/Fighter';
import FighterListItem from '~/screens/fighter_list/components/FighterListItem';

const FighterList = () => {
  const fighter = new Fighter(
    'islam-makhachev',
    'Islam',
    'Makhachev',
    '',
    'Lightweight Division',
    32,
    70.0,
    155.0,
    26,
    1,
    0,
    'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-05/MAKHACHEV_ISLAM_L_BELT_06-01.png?itok=O8gDxptU',
    'May. 23, 2015',
    'Dagestan Republic, Russia',
    'AKA (American Kickboxing Academy) San Jose',
    'Sambo',
    'Active'
  );
  return (
    <View className="bg-white flex-1 w-full h-full items-center">
      <ScrollView>
        <View className="flex-1 gap-4 py-4">
          <FighterListItem fighter={fighter}/>
          <FighterListItem fighter={fighter}/>
          <FighterListItem fighter={fighter}/>
          <FighterListItem fighter={fighter}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default FighterList;