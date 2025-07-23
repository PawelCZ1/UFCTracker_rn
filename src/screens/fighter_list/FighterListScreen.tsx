import { SafeAreaView, View } from 'react-native';

import FighterSearchBar from '~/screens/fighter_list/components/FighterSearchBar';
import { VerticalSpacer } from '~/components/VerticalSpacer';
import FighterList from '~/screens/fighter_list/components/FighterList';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const FighterListScreen = ({ title, path, children }: ScreenContentProps) => {
  return (
    <SafeAreaView className="flex-1 w-full h-full bg-black">
      <View className="flex-1 items-center justify-start  pt-6">
        <FighterSearchBar placeholder="Search" onPress={() => {}}/>
        <VerticalSpacer size={16}/>
        <FighterList/>
      </View>
    </SafeAreaView>
  );
};
const styles = {
  container: `items flex-1 justify-center w-full h-full bg-black px-8`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
