import { View, StyleSheet, Text } from 'react-native';
import { GtkAppBar, GtkDrawer, GtkIconButton } from 'gtk-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerItems = [
    {
      label: 'Home',
      icon: <GtkIconButton iconName="home" size={20} />,
      onPress: () => console.log('Home pressed'),
    },
    {
      label: 'Settings',
      icon: <GtkIconButton iconName="menu" size={20} />,
      onPress: () => console.log('Settings pressed'),
    },
    {
      label: 'About',
      icon: <GtkIconButton iconName="menu" size={20} />,
      onPress: () => console.log('About pressed'),
    },
  ];

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <GtkAppBar
          title="Adwaita demo"
          navigationIcon={
            <GtkIconButton
              iconName="menu"
              onPress={() => setIsDrawerOpen(true)}
            />
          }
        />
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Adwaita Demo</Text>
          <Text style={styles.subtitle}>
            this is a tour of the features the library has to offer
          </Text>
        </View>

        <GtkDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          header={{
            title: 'Adwaita Demo',
            subtitle: 'A GTK-style React Native UI Library',
          }}
          items={drawerItems}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    color: '#333',
    padding: 8,
  },
  subtitle: {
    color: '#666',
  },
});
