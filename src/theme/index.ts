// src/theme/index.ts
export const colors = {
  primary: {
    default: '#E6E6E7',
    pressed: '#C1C3C3',
    disabled: '#F0F0F0', // Added disabled color for primary
    text: '#2E2E33', // Added text color for primary
  },
  suggested: {
    default: '#3584E4',
    pressed: '#2A6AB6',
    disabled: '#9DC7F3',
    text: '#FFFFFF', // Added text color for suggested
  },
  secondary: {
    default: '#E4E4E4',
    pressed: '#CCCCCC',
    disabled: '#F0F0F0',
    text: '#000000', // Added text color for secondary
  },
  destructive: {
    default: '#F6D9D9',
    pressed: '#EAA6A6',
    disabled: '#F2B5B8',
    text: '#C30000', // Added text color for destructive
  },
  pill: {},
  iconButton: {},
};

export const spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const borderRadius = {
  sm: 8,
  md: 12,
};
