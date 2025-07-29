import { View } from 'react-native';

interface Props {
  thickness: number;
  color: string;
}

export const HorizontalDivider = ({ thickness, color }: Props) => {
  return (
    <View
      style={{
        width: '100%',
        height: thickness,
        backgroundColor: color
      }}
    />
  );
};