import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Fighter } from '../../../models/Fighter';
import { useState } from 'react';

interface Props {
  fighter: Fighter;
}

const FighterIntroduction = ({fighter}: Props) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <View className={styles.container}>
      <View className="flex flex-col gap-4">
        <View className="flex flex-row">
          <View className="flex-1 flex-col gap-4">
            <Text className={styles.name}>{fighter.firstName}</Text>
            <Text className={styles.name}>{fighter.lastName}</Text>
            <Text className={styles.category}>{fighter.category}</Text>
          </View>
          <View className="flex-1">
            {imageLoading && (
              <View className="absolute inset-0 items-center justify-center">
                <ActivityIndicator size="large" color="#fff" />
              </View>
            )}
            <Image
              key={fighter.imageUrl}
              source={{ uri: fighter.imageUrl }}
              resizeMode="contain"
              className="h-60 w-full"
              onLoadStart={() => setImageLoading(true)}
              onLoadEnd={() => setImageLoading(false)}
            />
          </View>
        </View>
        <View className="flex flex-row items-center justify-center gap-4">
          <Text className={styles.stats}>WINS: {fighter.wins}</Text>
          <Text className={styles.stats}>LOSSES: {fighter.losses}</Text>
          <Text className={styles.stats}>DRAWS: {fighter.draws}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: "p-6",
  name: "text-4xl font-bold italic text-white",
  category: "ml-2 text-white",
  stats: "text-gray-600 text-2xl font-bold"
}

export default FighterIntroduction;