import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
const navigation = useNavigation();
  return (
    <ScrollView style={styles.home}>
     <View style={styles.card}>
        <View style={styles.containerCardsColumn}>
          <TouchableOpacity style={[styles.cardColumn, {backgroundColor: 'powderblue'}]} onPress={() => navigation.navigate('Calculadora')}>
              <Text>Compare a melhor forma de investir!</Text>  
          </TouchableOpacity>
          <TouchableOpacity style={[styles.cardColumn, {backgroundColor: 'skyblue'}]} onPress={() => navigation.navigate('Perfil')}>
              <Text>Veja qual é seu perfil de investidor</Text>  
          </TouchableOpacity>  
          <TouchableOpacity style={[styles.cardColumn, {backgroundColor: 'steelblue'}]} onPress={() => navigation.navigate('Estudo')}>
              <Text>Estude Agora!</Text>  
          </TouchableOpacity>  
          <TouchableOpacity style={[styles.cardColumn, {backgroundColor: 'red'}]} onPress={() => navigation.navigate('Cotações')}>
              <Text>Cotações do momento</Text>  
          </TouchableOpacity>  
          <TouchableOpacity style={[styles.cardColumn, {backgroundColor: 'green'}]} onPress={() => navigation.navigate('Calculadora')}>
              <Text>Calcule qualquer tipo de juros!</Text>  
          </TouchableOpacity>  
          <TouchableOpacity style={[styles.cardColumn, {backgroundColor: 'yellow'}]} onPress={() => navigation.navigate('Cotações')}>
              <Text>Valores das Criptomoedas!</Text>  
          </TouchableOpacity>  
          <TouchableOpacity style={[styles.cardColumn, {backgroundColor: 'pink'}]} onPress={() => navigation.navigate('Estudo')}>
              <Text>Ajuda?</Text>  
          </TouchableOpacity>  
        </View>
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'rgba(34,36,40,1)',
    height: '100%'
  },
  cardColumn: {
    width: '100%',
    height: 100,
    marginVertical: 20,
    borderRadius:15
  },
  card:{
    marginBottom:50
  },
  containerCardsColumn: {
    marginHorizontal: 30
  }
});