import { type ViewStyle } from 'react-native';
import { borderRadius, spacing } from '../theme';

export const getButtonSize = (size: 'default' | 'large'): ViewStyle => {
  switch (size) {
    case 'large':
      return {
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.md,
        minWidth: 120,
      };
    default:
      return {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.md,
        minWidth: 90,
      };
  }
};
