import React from 'react'
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native'

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../../../assets/logo-completa.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  	paddingTop: statusBarHeight,
    backgroundColor: 'rgba(34,36,40,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  tinyLogo: {
    width: '28%',
    height: 28,
  }
});
