import * as React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Calculator() {
  return (
    <View style={styles.calculator}>
        <Text style={{color: 'white' }}>Calculadora</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  calculator: {
    backgroundColor: 'rgba(34,36,40,1)',
    height: '100%'
  },
});