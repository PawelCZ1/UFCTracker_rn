import { TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const FighterSearchBar = ({placeholder, value, onChangeText}: Props) => {
  return (
    <View className={styles.container}>
      <Feather name="search" size={24} color="#a8b5db" />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
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