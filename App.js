import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

import Home from './src/pages/Home';
import AppLoading from 'expo-app-loading';
import TabNavbar from './src/components/TabNavigation';

import {
  useFonts,
  Jost_400Regular,
  Jost_700Bold,
  Jost_500Medium,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_700Bold,
    Jost_600SemiBold,
    Jost_500Medium
  })

if(!fontsLoaded){
  <AppLoading></AppLoading>
}

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

