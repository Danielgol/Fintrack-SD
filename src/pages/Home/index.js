import * as React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.home}>
        <Text style={{color: 'white' }}>Início</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'rgba(34,36,40,1)',
    height: '100%',
  },
});