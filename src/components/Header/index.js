import React from 'react'
import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../../../assets/logo-completa.png')}></Image>
      <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
        <Icon style={styles.about} name="information-circle-outline" size={28} color="#A9A9A9"/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  	paddingTop: statusBarHeight,
    paddingBottom: statusBarHeight/2,
    backgroundColor: 'rgba(34,36,40,1)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tinyLogo: {
    width: '28%',
    height: 28,
    marginLeft: '36%'
  },

  about: {
    marginRight: 35
  }

});
