import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
const navigation = useNavigation();
  return (
    <ScrollView style={styles.home}>
     <View style={styles.card}>
        <View style={styles.containerCardsColumn}>
          <LinearGradient colors={['#00aaff', '#15a0fb', '#2895f6', '#388af0', '#467fe9', '#5373e1', '#5f67d8','#6a5acd']} style={{borderRadius:15, marginVertical:20}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Calculadora')}>
                <Text style={styles.text}>Compare a melhor forma de investir!</Text>  
                <Icon style={styles.about} name="wallet-sharp" size={40} color="black"/>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={['#990094', '#951c9e', '#8f2ba7', '#8937b0', '#8341b8', '#7b4abf', '#7352c7', '#6a5acd']} style={{borderRadius:15, marginVertical:20}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Perfil')}>
                <Text style={styles.text}>Qual é seu perfil de investidor?</Text>  
                <Icon style={styles.about} name="people-sharp" size={40} color="black"/>
            </TouchableOpacity> 
          </LinearGradient> 
          <LinearGradient colors={['#1fffbc', '#2ce6a6', '#32cd91', '#33b57d', '#319e6a', '#2e8758','#297148', '#235c38']} style={{borderRadius:15, marginVertical:20}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Estudo')}>
                <Text style={styles.text}>Aprenda agora!</Text>
                <Icon style={styles.about} name="book-sharp" size={40} color="black"/>  
            </TouchableOpacity>
          </LinearGradient> 
          <LinearGradient colors={['#ffb56b', '#f39060', '#e16b5c', '#ca485c', '#ac255e', '#870160']} style={{borderRadius:15, marginVertical:20}}>   
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Cotações')}>
                <Text style={styles.text}>Cotações do momento!</Text>  
                <Icon style={styles.about} name="trending-up-sharp" size={40} color="black"/>
            </TouchableOpacity>  
          </LinearGradient> 
          <LinearGradient colors={['#d4d4d4', '#c7c2d4', '#bab0d3', '#ac9ed2', '#9d8dd1', '#8d7cd0', '#7d6bcf', '#6a5acd']} style={{borderRadius:15, marginVertical:20}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Calculadora')}>
                <Text style={styles.text}>Calcule qualquer tipo de juros!</Text>  
                <Icon style={styles.about} name="calculator-sharp" size={40} color="black"/>
            </TouchableOpacity>  
          </LinearGradient> 
          <LinearGradient colors={['#f2e200', '#f0d821', '#eece32', '#eac43e', '#e4bb48', '#deb251', '#d6aa59', '#cda260']} style={{borderRadius:15, marginVertical:20}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Cotações')}>
                <Text style={styles.text}>Valores das Criptomoedas!</Text>  
                <Icon style={styles.about} name="logo-bitcoin" size={40} color="black"/>
            </TouchableOpacity> 
          </LinearGradient>  
          <LinearGradient colors={['#f2cede', '#ecc2d9', '#e6b7d5', '#deacd2', '#d5a1d0', '#ca97ce', '#be8ecd', '#b085cd']} style={{borderRadius:15, marginVertical:20}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Estudo')}>
                <Text style={styles.text}>Ajuda</Text>  
                <Icon style={styles.about} name="help-circle" size={40} color="black"/>
            </TouchableOpacity>  
          </LinearGradient> 
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
    height: 105,
    borderRadius:15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    width:'60%' 
  },
  card:{
    marginBottom:50
  },
  containerCardsColumn: {
    marginHorizontal: 30
  }
});