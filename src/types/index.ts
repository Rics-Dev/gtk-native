// src/types/index.ts
import { type StyleProp, type ViewStyle, type TextStyle } from 'react-native';

export interface BaseProps {
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export interface ButtonProps extends BaseProps {
  onPress: () => void;
  label: string;
  variant?: 'primary' | 'suggested' | 'secondary' | 'destructive'; // Add 'suggested' here
  size?: 'default' | 'large';
  disabled?: boolean;
  loading?: boolean;
  textStyle?: StyleProp<TextStyle>;
}
