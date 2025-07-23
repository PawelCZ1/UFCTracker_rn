import { Image, Text, View } from 'react-native';
import { Fighter } from '~/models/Fighter';
import { Feather } from '@expo/vector-icons';
import { HorizontalSpacer } from '~/components/HorizontalSpacer';

interface Props {
  fighter: Fighter;
}

const FighterListItem = ({fighter}: Props) => {
  return (
    <View className="bg-red-700 rounded-lg flex flex-row justify-center items-center p-4">
      <Image
        source={{ uri: fighter.imageUrl }}
        resizeMode="contain"
        className="w-20 h-20"
      />
      <HorizontalSpacer size={16} />
      <View className="flex flex-col">
        <Text>{fighter.firstName} {fighter.lastName}</Text>
        {fighter.nickname !== "" ? (
          <Text className="text-white">&quot;{fighter.nickname}&quot;</Text>
        ) : null}
        <Text>{fighter.wins}-{fighter.losses}-{fighter.draws}</Text>
      </View>
      <HorizontalSpacer size={16} />
      <Feather name={"arrow-right"} size={24} color="#000"/>
    </View>
  );
};

export default FighterListItem;