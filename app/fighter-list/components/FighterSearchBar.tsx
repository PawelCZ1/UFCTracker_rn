import { TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props {
  placeholder: string;
  onPress: () => void;
}

const FighterSearchBar = ({placeholder, onPress}: Props) => {
  return (
    <View className={styles.container}>
      <Feather name="search" size={24} color="#a8b5db" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className={styles.input}
      />
    </View>
  );
};

export default FighterSearchBar;

const styles = {
  container: "flex-row bg-white items-center rounded-lg px-5 py-4 mx-8",
  input: "flex-1 ml-2 text-black"
};