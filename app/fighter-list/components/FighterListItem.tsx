import { Text, TouchableOpacity, View } from 'react-native';
import { Fighter } from '../../../models/Fighter';
import { Feather } from '@expo/vector-icons';
import { HorizontalSpacer } from '../../../components/HorizontalSpacer';
import { CacheImage } from 'components/CacheImage';

interface Props {
  fighter: Fighter;
  onPress: (fighter: Fighter) => void;
  disabled?: boolean;
}

const FighterListItem = ({ fighter, onPress, disabled }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(fighter)} disabled={disabled}>
      <View className="bg-red-700 rounded-lg  flex flex-row items-center p-4">
        <View className="flex-shrink-0">
          <CacheImage
            source={{ uri: fighter.imageUrl }}
            resizeMode="contain"
            className="w-20 h-20" // lub odpowiednie style dla listy
            showLoader={true}
            loaderColor="#fff"
            loaderSize="small" // mniejszy loader dla listy
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