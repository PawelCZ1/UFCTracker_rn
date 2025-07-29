import { Fighter } from 'models/Fighter';
import { Text, View } from 'react-native';
import { HorizontalDivider } from '../../../components/HorizontalDivider';
import { VerticalSpacer } from '../../../components/VerticalSpacer';
import FighterDetailRow from './FighterDetailRow';

interface Props {
  fighter: Fighter;
}

const FighterBioSection = ({fighter}: Props) => {
  return (
    <View className="flex flex-col">
      <Text className="text-white font-bold text-xl">BIO</Text>
      <VerticalSpacer size={8} />
      <HorizontalDivider thickness={4} color="white"/>
      <VerticalSpacer size={8} />
      <FighterDetailRow rowKey="AGE" rowValue={fighter.age}/>
      <VerticalSpacer size={4} />
      <HorizontalDivider thickness={2} color="#4B5563"/>
      <VerticalSpacer size={4} />
      <FighterDetailRow rowKey="WEIGHT" rowValue={fighter.weight}/>
      <VerticalSpacer size={4} />
      <HorizontalDivider thickness={2} color="#4B5563"/>
      <VerticalSpacer size={4} />
      <FighterDetailRow rowKey="HEIGHT" rowValue={fighter.height}/>
      <VerticalSpacer size={4} />
      <HorizontalDivider thickness={2} color="#4B5563"/>
      <VerticalSpacer size={4} />
      <FighterDetailRow rowKey="PLACE OF BIRTH" rowValue={fighter.placeOfBirth || "Unknown"}/>
      <VerticalSpacer size={4} />
      <HorizontalDivider thickness={2} color="#4B5563"/>
      <VerticalSpacer size={4} />
      <FighterDetailRow rowKey="OCTAGON DEBUT" rowValue={fighter.octagonDebut}/>
    </View>
  );
};

export default FighterBioSection;