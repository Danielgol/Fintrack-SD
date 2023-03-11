import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

import Home from './src/pages/Home';
import TabNavbar from './src/components/TabNavigation';
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Jost-SemiBold': require('./assets/fonts/Jost-SemiBold.ttf'),
    'Jost-Regular':  require('./assets/fonts/Jost-Regular.ttf'),
    'Jost-Bold':  require('./assets/fonts/Jost-Bold.ttf'),
    'Jost-Medium':  require('./assets/fonts/Jost-Medium.ttf')
  })

  if(!fontsLoaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <TabNavbar style={styles.nav}></TabNavbar>
      <StatusBar style="inverted"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444850',
  }
});

