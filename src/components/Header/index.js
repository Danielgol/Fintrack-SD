import React from 'react'
import { View, StyleSheet, Text, StatusBar } from 'react-native'

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header() {
  return (
    <View style={styles.container}>
    	<View style={styles.content}>
      		<Text>Header do App!</Text>
      	</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  	paddingTop: statusBarHeight,
    backgroundColor: '#66CDAA'
  },
});
