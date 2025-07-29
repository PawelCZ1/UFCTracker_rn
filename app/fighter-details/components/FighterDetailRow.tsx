import { Text, View } from 'react-native';

interface Props {
  rowKey: string;
  rowValue: string | number;
}

const FighterDetailRow = ({ rowKey, rowValue }: Props) => {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-[12px] font-bold text-gray-600">{rowKey}</Text>
      <Text className="text-[20px] font-bold text-white">{rowValue}</Text>
    </View>
  );
};

export default FighterDetailRow;