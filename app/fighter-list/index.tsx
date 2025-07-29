import { ActivityIndicator, SafeAreaView, View, Text } from 'react-native';

import FighterSearchBar from './components/FighterSearchBar';
import { VerticalSpacer } from '../../components/VerticalSpacer';
import FighterList from './components/FighterList';
import { useEffect, useState } from 'react';
import { fetchFighters } from '../../services/api';
import { Fighter } from '../../models/Fighter';

const FighterListScreen = () => {

  const [fighters, setFighters] = useState<Fighter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFighters = fighters.filter(fighter => {
    const query = searchQuery.trim().toLowerCase();
    const fullName = `${fighter.firstName} ${fighter.lastName}`.toLowerCase();
    return fullName.includes(query) || fighter.nickname.toLowerCase().includes(query);
  });

  useEffect(() => {
    const loadFighters = async () => {
      try {
        setLoading(true);
        const data = await fetchFighters();
        setFighters(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching fighters:', err);
        setError('Failed to load fighters');
      } finally {
        setLoading(false);
      }
    };

    loadFighters();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="white" />
        <Text className="text-white mt-2">Loading fighters...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 w-full h-full bg-black">
      <View className="flex-1 items-center justify-start  pt-6">
        <FighterSearchBar placeholder="Search" value={searchQuery} onChangeText={setSearchQuery}/>
        <VerticalSpacer size={16}/>
        <FighterList fighters={filteredFighters} />
      </View>
    </SafeAreaView>
  );
};
const styles = {
  container: `items flex-1 justify-center w-full h-full bg-black px-8`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};

export default FighterListScreen;
