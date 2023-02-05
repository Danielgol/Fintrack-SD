import * as React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={styles.about}>
        <Text style={{color: 'white' }}>Sobre o proeto e sobre nós.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  about: {
    backgroundColor: 'rgba(34,36,40,1)',
    height: '100%'
  },
});