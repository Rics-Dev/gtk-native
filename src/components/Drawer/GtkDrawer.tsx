import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

interface GtkDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  width?: number;
  children?: React.ReactNode;
  header?: {
    title?: string;
    subtitle?: string;
  };
  items?: {
    label: string;
    icon?: React.ReactNode;
    onPress: () => void;
  }[];
}

export const GtkDrawer: React.FC<GtkDrawerProps> = ({
  isOpen,
  onClose,
  width = Dimensions.get('window').width,
  children,
  header,
  items = [],
}) => {
  const translateX = useRef(new Animated.Value(-width)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: -width,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isOpen, width, translateX, opacity]);

  if (!isOpen) return null;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[styles.overlay, { opacity }]} />
      </TouchableWithoutFeedback>

      <Animated.View
        style={[
          styles.drawer,
          {
            width,
            transform: [{ translateX }],
          },
        ]}
      >
        <ScrollView>
          {header && (
            <View style={styles.header}>
              <Text style={styles.headerTitle}>{header.title}</Text>
              {header.subtitle && (
                <Text style={styles.headerSubtitle}>{header.subtitle}</Text>
              )}
            </View>
          )}

          <View style={styles.content}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={item.onPress}
              >
                {item.icon && <View style={styles.itemIcon}>{item.icon}</View>}
                <Text style={styles.itemLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
            {children}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#fafafa',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '##fafafa',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E2E33',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  content: {
    flex: 1,
    paddingVertical: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  itemIcon: {
    marginRight: 12,
    width: 24,
    alignItems: 'center',
  },
  itemLabel: {
    fontSize: 16,
    color: '#2E2E33',
  },
});

export default GtkDrawer;
