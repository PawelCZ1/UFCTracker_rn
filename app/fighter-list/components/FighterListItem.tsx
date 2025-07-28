import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Fighter } from '../../../models/Fighter';
import { Feather } from '@expo/vector-icons';
import { HorizontalSpacer } from '../../../components/HorizontalSpacer';
import { useRouter } from 'expo-router';
import { useFighterContext } from '../../../contexts/FighterContext';

interface Props {
  fighter: Fighter;
}

const FighterListItem = ({fighter}: Props) => {

  const router = useRouter();
  const { setSelectedFighter } = useFighterContext();

  const handlePress = () => {
    setSelectedFighter(fighter);
    router.push(`/fighter-details/${fighter.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="bg-red-700 rounded-lg  flex flex-row items-center p-4">
        <View className="flex-shrink-0">
          <Image
            source={{ uri: fighter.imageUrl }}
            resizeMode="contain"
            className="w-20 h-20"
          />
        </View>
        <HorizontalSpacer size={16} />
        <View className="flex-1 flex-col">
          <Text className="text-black" numberOfLines={1} ellipsizeMode="tail">
            {fighter.firstName} {fighter.lastName}
          </Text>
          {fighter.nickname !== "" ? (
            <Text className="text-white" numberOfLines={1} ellipsizeMode="tail">
              &quot;{fighter.nickname}&quot;
            </Text>
          ) : null}
          <Text className="text-black">{fighter.wins}-{fighter.losses}-{fighter.draws}</Text>
        </View>
        <View className="flex-shrink-0 ml-4">
          <Feather name={"arrow-right"} size={24} color="#000"/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FighterListItem;