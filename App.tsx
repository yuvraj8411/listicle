
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={{ color: isDarkMode ? 'white' : 'black', justifyContent: 'center', textAlign: 'center' }}>
        Welcome to the New App Screen!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    marginHorizontal: 24,
    flex: 1,
  },
});

export default App;
