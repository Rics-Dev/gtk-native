import { View, StyleSheet, Text } from 'react-native';
import { GtkAppBar } from 'gtk-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* App Bar */}
      <GtkAppBar type="small" centered={true} title="Adwaita demo" />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Adwaita Demo</Text>
        <Text style={styles.subtitle}>
          this is a tour of the features the library has to offer
        </Text>
      </View>
    </View>
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
    padding: 24,
  },
  subtitle: {
    color: '#666',
  },
});
