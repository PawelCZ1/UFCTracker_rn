import { View, Text, Image } from 'react-native';
import { Fighter } from '../../../models/Fighter';

interface Props {
  fighter: Fighter;
}

const FighterIntroduction = ({fighter}: Props) => {
  return (
    <View className="p-6">
      <View className="flex flex-col gap-4">
        <View className="flex flex-row">
          <View className="flex flex-col gap-4">
            <Text className="text-4xl font-bold italic text-white">{fighter.firstName}</Text>
            <Text className="text-4xl font-bold italic text-white">{fighter.lastName}</Text>
            <Text className="ml-2 text-white">{fighter.category}</Text>
          </View>
          <Image
            source={{ uri: fighter.imageUrl }}
            resizeMode="contain"
            className="w-20 h-20"
          />
        </View>
        <View className="flex flex-row items-start justify-start gap-4">
          <Text className="text-gray-600">Dupa 123</Text>
          <Text className="text-gray-600">Dupa 123</Text>
          <Text className="text-gray-600">Dupa 123</Text>
        </View>
      </View>
    </View>
  );
};

export default FighterIntroduction;