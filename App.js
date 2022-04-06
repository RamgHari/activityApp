import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ActivityScreen from './src/screens/ActivityScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start....A-1  !</Text>
      <StatusBar style="auto" /> */}
      <ActivityScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
