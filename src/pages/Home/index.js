import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import LargeButton from '../../components/Modal/LargeModal';

export default function Home() {

  return (
    <ScrollView style={styles.home}>
     <View style={styles.card}>
        <View style={styles.containerCardsColumn}>
          <LargeButton text="Compare a melhor forma de investir!" bgColor="#19eb7a" navigate="Calculadora" icon="wallet-sharp"></LargeButton>
          <LargeButton text="Qual é seu perfil de investidor?" bgColor="#d4d4d4" navigate="Perfil" icon="people-sharp"></LargeButton>
          <LargeButton text="Aprenda agora!" bgColor="#dead5b" navigate="Estudo" icon="book-sharp"></LargeButton>
          <LargeButton text="Valores das ações!" bgColor="#fff623" navigate="Cotações" icon="trending-up-sharp"></LargeButton>
          <LargeButton text="Calcule qualquer tipo de juros!" bgColor="#45e1f8" navigate="Juros" icon="calculator-sharp"></LargeButton>
          <LargeButton text="Cotações do momento!" bgColor="#ff8f59" navigate="Cotações" icon="logo-bitcoin"></LargeButton>
          <LargeButton text="Ajuda" bgColor="#f2cede" navigate="Estudo" icon="help-circle"></LargeButton>
        </View>
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#444850',
    height: '100%'
  },
  card:{
    marginTop: 10,
    marginBottom:50
  },
  containerCardsColumn: {
    marginHorizontal: 30
  }
});