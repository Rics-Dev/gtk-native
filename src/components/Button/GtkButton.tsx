import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { type ButtonProps } from '../../types';
import { getButtonSize } from '../../utils';
import { colors, borderRadius } from '../../theme';

export const GtkButton: React.FC<ButtonProps> = ({
  onPress,
  label,
  variant = 'primary',
  disabled = false,
  loading = false,
  size = 'default', // Add default value for size
  style,
  textStyle,
  testID,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const getBackgroundColor = () => {
    if (disabled) {
      return colors[variant].disabled;
    }
    if (isPressed) {
      return colors[variant].pressed;
    }
    return colors[variant].default;
  };

  const getTextColor = () => {
    return colors[variant].text; // Use the text color from the variant
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={disabled || loading}
      testID={testID}
      style={[
        styles.base,
        getButtonSize(size), // Pass the size prop
        { backgroundColor: getBackgroundColor() },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Text style={[styles.label, { color: getTextColor() }, textStyle]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
});
