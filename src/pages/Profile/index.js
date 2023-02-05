import * as React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.profile}>
        <Text style={{color: 'white' }}>PERFIL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    backgroundColor: 'rgba(34,36,40,1)',
    height: '100%'
  },
});