import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import LargeButton from '../../components/Modal/LargeModal';

export default function Study() {
  return (
    <ScrollView style={styles.study}>
     <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://drive.google.com/file/d/1vEleEGADcznUW35QfOgiqq5KU9gzzjc0/view?usp=sharing')}>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={require('../../../assets/images/Dicionario-financeiro.png')}></Image>
          <Text style={styles.cardTitle}>Dicionário Financeiro</Text>
          <Text style={styles.cardText}>Conheça alguns termos importantes no mundo financeiro</Text>
          
        </View>
     </TouchableOpacity>
     <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://drive.google.com/file/d/1vNXZS-X6KXsFDIfWXMK0US2lwwXBJ_Fm/view?usp=sharing')}>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={require('../../../assets/images/Educacao-fin-basica.png')}></Image>
          <Text style={styles.cardTitle}>Educação Financeira Básica</Text>
          <Text style={styles.cardText}> Entenda a importância de ter uma educação financeira</Text>
          
        </View>
     </TouchableOpacity>
     <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://drive.google.com/file/d/1vSJsQFrk8o7f_GhE2-UKAJBJ3RqeFPvu/view?usp=sharing')}>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={require('../../../assets/images/Investimentos.png')}></Image>
          <Text style={styles.cardTitle}>Investimentos</Text>
          <Text style={styles.cardText}> Saiba o básico sobre investimentos.</Text>
          
        </View>
     </TouchableOpacity>
     
     <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://drive.google.com/file/d/1vNEmXiZ-txCLjuK9D3mqVi3-DPMRlRsU/view?usp=sharing')}>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={require('../../../assets/images/Emprestimos.png')}></Image>
          <Text style={styles.cardTitle}>Empréstimos</Text>
          <Text style={styles.cardText}>Entenda o funcionamento e quando utilizar empréstimos</Text>
          
        </View>
     </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  study: {
    backgroundColor: '#444850',
    height: '100%',
    marginBottom: 45
  },
  card:{
    marginVertical: 15,
    marginHorizontal: 24,
    backgroundColor: '#7765e6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  cardTitle:{
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: 'Jost-Bold',
  },
  cardText:{
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Jost-Medium',
  },
  cardImage:{
    width: 150,
    height: 150,
  }
});