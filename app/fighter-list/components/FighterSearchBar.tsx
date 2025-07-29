import { TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRef } from 'react';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const FighterSearchBar = ({placeholder, value, onChangeText}: Props) => {
  const textInputRef = useRef<TextInput>(null);

  const clearSearch = () => {
    onChangeText('');
    textInputRef.current?.blur();
  };

  return (
    <View className={styles.container}>
      <Feather name="search" size={24} color="#a8b5db" />
      <TextInput
        ref={textInputRef}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        autoCorrect={false}
        autoCapitalize="none"
        submitBehavior="blurAndSubmit"
        className={styles.input}
      />
      <TouchableOpacity
        onPress={clearSearch}
        delayPressIn={0}
        delayPressOut={0}
      >
        <Feather name="x" size={24} color="#a8b5db" />
      </TouchableOpacity>
    </View>
  );
};

export default FighterSearchBar;

const styles = {
  container: "flex-row bg-white items-center rounded-lg px-5 py-4 mx-8",
  input: "flex-1 ml-2 text-black"
};