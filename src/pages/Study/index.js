import * as React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Study() {
  return (
    <View style={styles.study}>
        <Text style={{color: 'white' }}>ESTUDO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  study: {
    backgroundColor: 'rgba(34,36,40,1)',
    height: '100%'
  },
});