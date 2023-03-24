import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import LargeButton from '../../components/Modal/LargeModal';
import TextModal from '../../components/Modal/TextModal';

export default function Study() {
  return (
    <ScrollView style={styles.study}>
      <TextModal title='Dicionário Financeiro' text='Conheça alguns termos importantes no mundo financeiro' image={require('../../../assets/images/Dicionario-financeiro.png')} link='https://drive.google.com/file/d/1vEleEGADcznUW35QfOgiqq5KU9gzzjc0/view?usp=sharing'></TextModal>
      <TextModal title='Educação Financeira Básica' text='Entenda a importância de ter uma educação financeira' image={require('../../../assets/images/Educacao-fin-basica.png')} link='https://drive.google.com/file/d/1vNXZS-X6KXsFDIfWXMK0US2lwwXBJ_Fm/view?usp=sharing'></TextModal>
      <TextModal title='Investimentos' text='Saiba o básico sobre investimentos.' image={require('../../../assets/images/Investimentos.png')} link='https://drive.google.com/file/d/1vSJsQFrk8o7f_GhE2-UKAJBJ3RqeFPvu/view?usp=sharing'></TextModal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  study: {
    backgroundColor: '#444850',
    height: '100%',
    marginBottom: 45,
    paddingHorizontal:'7%'
  }
});