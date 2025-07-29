import { Text, View } from 'react-native';
import { VerticalSpacer } from '../../../components/VerticalSpacer';
import { HorizontalDivider } from '../../../components/HorizontalDivider';
import FighterDetailRow from './FighterDetailRow';
import { Fighter } from '../../../models/Fighter';

interface Props {
  fighter: Fighter;
}

const FighterProfileSection = ({fighter}: Props) => {
  return (
    <View className="flex flex-col">
      <Text className="text-white font-bold text-xl">FIGHTER PROFILE</Text>
      <VerticalSpacer size={8} />
      <HorizontalDivider thickness={4} color="white"/>
      <VerticalSpacer size={8} />
      <FighterDetailRow rowKey="FIGHTING STYLE" rowValue={fighter.fightingStyle || "Unknown"}/>
      <VerticalSpacer size={4} />
      <HorizontalDivider thickness={2} color="#4B5563"/>
      <VerticalSpacer size={4} />
      <FighterDetailRow rowKey="TRAINS AT" rowValue={fighter.trainsAt || "Unknown"}/>
      <VerticalSpacer size={4} />
      <HorizontalDivider thickness={2} color="#4B5563"/>
      <VerticalSpacer size={4} />
      <FighterDetailRow rowKey="STATUS" rowValue={fighter.status || "Unknown"}/>
    </View>
  );
};

export default FighterProfileSection;