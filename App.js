import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

import Home from './src/pages/Home';

import TabNavbar from './src/components/TabNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <TabNavbar style={styles.nav}></TabNavbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

