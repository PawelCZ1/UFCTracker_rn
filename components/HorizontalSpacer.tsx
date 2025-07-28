import { View } from 'react-native';

export const HorizontalSpacer = ({ size = 16 }: { size?: number }) => (
  <View style={{ width: size }} />
);