import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface GtkAppBarProps {
  title?: string;
  type?: 'small' | 'medium' | 'large';
  centered?: boolean;
  navigationIcon?: React.ReactNode;
  actions?: React.ReactNode[];
}

export const GtkAppBar: React.FC<GtkAppBarProps> = ({
  title = 'App',
  type = 'small',
  centered = false,
  navigationIcon,
  actions = [],
}) => {
  const getAppBarHeight = () => {
    switch (type) {
      case 'small':
        return 50;
      case 'medium':
        return 70;
      case 'large':
        return 90;
      default:
        return 50;
    }
  };

  const renderNavigationIcon = () => {
    if (navigationIcon) {
      return <View style={styles.navIcon}>{navigationIcon}</View>;
    }
    return null;
  };

  const renderActions = () => {
    return (
      <View style={styles.actions}>
        {actions.map((action, index) => (
          <TouchableOpacity key={index} style={styles.actionIcon}>
            {action}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  // Dynamically compute styles for left and right sections
  const dynamicStyles = StyleSheet.create({
    leftSection: {
      flex: centered ? 1 : 0,
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightSection: {
      flex: centered ? 1 : 0,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.appBar, { height: getAppBarHeight() }]}>
        <View style={dynamicStyles.leftSection}>{renderNavigationIcon()}</View>
        <Text
          style={[
            styles.appBarTitle,
            centered ? styles.centeredTitle : styles.leftAlignedTitle,
          ]}
        >
          {title}
        </Text>
        <View style={dynamicStyles.rightSection}>{renderActions()}</View>
      </View>
      <View style={styles.ruler} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    paddingTop: 0,
  },
  appBar: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    zIndex: 1000,
  },
  navIcon: {
    paddingRight: 10,
  },
  appBarTitle: {
    color: '#2E2E33',
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: '100%', // Ensure the title doesn't exceed the container width
  },
  centeredTitle: {
    textAlign: 'center',
    alignSelf: 'center', // Center the text within its container
    width: 'auto', // Allow width to be determined by content
    flexShrink: 1, // Allow text to shrink if needed
  },
  leftAlignedTitle: {
    textAlign: 'left',
    marginLeft: 10,
  },
  actions: {
    flexDirection: 'row',
  },
  actionIcon: {
    paddingLeft: 10,
  },
  ruler: {
    width: '100%',
    height: 1,
    backgroundColor: '#D1D1D6',
  },
});

export default GtkAppBar;
