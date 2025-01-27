import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface GtkIconButtonProps {
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name']; // Restrict to valid icon names
  onPress?: () => void;
  style?: object;
  size?: number;
  color?: string;
  type?: 'raised' | 'flat';
  circular?: boolean;
  backgroundColor?: string;
}

export const GtkIconButton: React.FC<GtkIconButtonProps> = ({
  iconName,
  onPress,
  style = {},
  size = 24,
  color = '#000',
  type = 'flat',
  circular = false,
  // backgroundColor = '#E6E6E7',
}) => {
  const isStandard = type === 'raised';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        circular && styles.circular,
        isStandard && styles.raised,
        style,
      ]}
      activeOpacity={0.7}
    >
      <View>
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circular: {
    borderRadius: 50,
  },
  raised: {
    backgroundColor: '#E6E6E7',
  },
});

export default GtkIconButton;
