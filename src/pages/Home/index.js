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
          <View style={{borderRadius:15, marginVertical:10}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Calculadora')}>
                <Text style={styles.text}>Compare a melhor forma de investir!</Text>  
                
                <View style={{backgroundColor: "#19eb7a", borderRadius:40, padding: 8}}>
                  <Icon name="wallet-sharp" size={40} color="black"/>
                </View>
            </TouchableOpacity>
          </View>
          <View style={{borderRadius:15, marginVertical:10}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Perfil')}>
                <Text style={styles.text}>Qual é seu perfil de investidor?</Text>  
                
                <View style={{backgroundColor:"#d4d4d4", borderRadius:40, padding: 8}}>
                  <Icon name="people-sharp" size={40} color="black"/>
                </View>
            </TouchableOpacity> 
          </View> 
          <View style={{borderRadius:15, marginVertical:10}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Estudo')}>
                <Text style={styles.text}>Aprenda agora!</Text>
                <View style={{backgroundColor: "#dead5b", borderRadius:40, padding: 8}}>
                  <Icon name="book-sharp" size={40} color="black"/>
                </View>
               
            </TouchableOpacity>
          </View> 
          <View style={{borderRadius:15, marginVertical:10}}>   
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Cotações')}>
                <Text style={styles.text}>Cotações do momento!</Text> 
                <View style={{backgroundColor: "#fff623",borderRadius:40, padding: 8}}>
                  <Icon name="trending-up-sharp" size={40} color="black"/>
                </View>
  
            </TouchableOpacity>  
          </View> 
          <View style={{borderRadius:15, marginVertical:10}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Calculadora')}>
                <Text style={styles.text}>Calcule qualquer tipo de juros!</Text>  
                <View style={{backgroundColor: "#45e1f8", borderRadius:40, padding: 8}}>
                  <Icon name="calculator-sharp" size={40} color="black"/>
                </View>
            </TouchableOpacity>  
          </View> 
          <View style={{borderRadius:15, marginVertical:10}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Cotações')}>
                <Text style={styles.text}>Valores das Criptomoedas!</Text>  
                <View style={{backgroundColor: "#ff8f59", borderRadius:40, padding: 8}}>
                  <Icon name="logo-bitcoin" size={40} color="black"/>
                </View>
                
            </TouchableOpacity> 
          </View>  
          <View style={{borderRadius:15, marginVertical:10}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate('Estudo')}>
                <Text style={styles.text}>Ajuda</Text>  
                <View style={{backgroundColor: "#f2cede", borderRadius:40, padding: 8}}>
                  <Icon name="help-circle" size={40} color="black"/>
                </View>
                
            </TouchableOpacity>  
          </View> 
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
    height: 165,
    borderRadius:15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#7765e6'
  },
  text:{
    fontSize:22,
    fontFamily:'Jost-SemiBold',
    width:'60%',
    color: "white"
  },
  card:{
    marginBottom:50
  },
  containerCardsColumn: {
    marginHorizontal: 30
  }
});