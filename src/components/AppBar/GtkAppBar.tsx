import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface GtkAppBarProps {
  title?: string;
  type?: 'small' | 'medium' | 'large';
  centered?: boolean;
  showRuler?: boolean;
  navigationIcon?: React.ReactNode;
  actions?: React.ReactNode[];
  style?: object;
  backgroundColor?: string;
  titleColor?: string;
  expandedHeight?: number;
}

export const GtkAppBar: React.FC<GtkAppBarProps> = ({
  title = 'App',
  type = 'small',
  centered = true,
  showRuler = true,
  navigationIcon,
  actions = [],
  style = {},
  backgroundColor = '#f7f7f7',
  titleColor = '#2E2E33',
  expandedHeight = 90,
}) => {
  const height =
    type === 'large' ? expandedHeight : type === 'medium' ? 70 : 50;

  return (
    <View style={[styles.container]}>
      <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
        <View style={[styles.appBar, { height, backgroundColor }, style]}>
          <View style={[styles.navIcon]}>{navigationIcon}</View>
          <View
            style={[
              styles.titleContainer,
              centered && styles.centeredTitleContainer,
            ]}
          >
            <Text
              style={[
                styles.appBarTitle,
                { color: titleColor },
                centered ? styles.centeredTitle : styles.leftAlignedTitle,
              ]}
            >
              {title}
            </Text>
          </View>
          <View style={styles.actions}>
            {actions.map((action, index) => (
              <TouchableOpacity key={index} style={styles.actionIcon}>
                {action}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {showRuler && <View style={styles.ruler} />}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  safeArea: {
    width: '100%',
  },
  appBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  navIcon: {
    padding: 0,
    minWidth: 48,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  centeredTitleContainer: {
    justifyContent: 'center',
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  centeredTitle: {
    textAlign: 'center',
  },
  leftAlignedTitle: {
    textAlign: 'left',
    marginLeft: 8,
  },
  actions: {
    flexDirection: 'row',
    minWidth: 48,
    justifyContent: 'flex-end',
  },
  actionIcon: {
    marginLeft: 8,
  },
  ruler: {
    width: '100%',
    height: 1,
    backgroundColor: '#D1D1D6',
  },
});

export default GtkAppBar;
