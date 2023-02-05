import * as React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Quotes() {
  return (
    <View style={styles.quotes}>
        <Text style={{color: 'white' }}>Quotes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  quotes: {
    backgroundColor: 'rgba(34,36,40,1)',
    height: '100%'
  },
});