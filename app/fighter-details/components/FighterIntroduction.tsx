import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Fighter } from '../../../models/Fighter';
import { useState } from 'react';

interface Props {
  fighter: Fighter;
}

const FighterIntroduction = ({fighter}: Props) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <View className="p-6">
      <View className="flex flex-col gap-4">
        <View className="flex flex-row">
          <View className="flex-1 flex-col gap-4">
            <Text className="text-4xl font-bold italic text-white">{fighter.firstName}</Text>
            <Text className="text-4xl font-bold italic text-white">{fighter.lastName}</Text>
            <Text className="ml-2 text-white">{fighter.category}</Text>
          </View>
          <View className="flex-1">
            {imageLoading && (
                <View className="absolute inset-0 justify-center items-center">
                  <ActivityIndicator size="large" color="#fff" />
                </View>
            )}
            <Image
                key={fighter.imageUrl}
                source={{ uri: fighter.imageUrl }}
                resizeMode="contain"
                className="w-full h-60"
                onLoadStart={() => setImageLoading(true)}
                onLoadEnd={() => setImageLoading(false)}
            />
          </View>
        </View>
        <View className="flex flex-row items-start justify-start gap-4">
          <Text className="text-gray-600">WINS: {fighter.wins}</Text>
          <Text className="text-gray-600">LOSSES: {fighter.losses}</Text>
          <Text className="text-gray-600">DRAWS: {fighter.draws}</Text>
        </View>
      </View>
    </View>
  );
};

export default FighterIntroduction;