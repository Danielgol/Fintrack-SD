import * as React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function About() {
  return (
    <ScrollView>
    <View style={styles.about}>
      <LinearGradient colors={['#69279c', '#6a2fa3', '#6a37aa', '#6a3eb1', '#6a46b8', '#6a4cbf', '#6a53c6', '#6a5acd']} style={styles.card}>
       <Text style={styles.textTitle}>Propósito</Text>
       <Text style={styles.text}>O aplicativo Fintrack tem como objetivo ajudar as pessoas a aprenderem sobre educação financeira de maneira simples e intuitiva. Com ele, é possível visualizar as cotações de ativos financeiros e descobrir onde é o melhor lugar para investir seu dinheiro. Além disso, o Fintrack oferece recursos e ferramentas que ajudam na compreensão dos conceitos financeiros, tornando o processo de aprendizado mais acessível. O propósito do aplicativo é democratizar o conhecimento financeiro e ajudar as pessoas a alcançarem suas metas financeiras de maneira mais eficiente.</Text>
      </LinearGradient>
      <View>
        <LinearGradient colors={['#69279c', '#6a2fa3', '#6a37aa', '#6a3eb1', '#6a46b8', '#6a4cbf', '#6a53c6', '#6a5acd']} style={styles.card}>
          <Text style={styles.textTitle}>Quem somos?</Text>
          <Text style={styles.text}>Somos uma equipe de estudantes da Universidade Federal Rural de Pernambuco (UFRPE), matriculados no curso de Ciência da Computação desde o semestre 2019.1. Temos como objetivo aprimorar nossos conhecimentos em tecnologia e desenvolvimento de software, além de buscar soluções inovadoras para problemas do dia a dia. Nossa formação acadêmica nos permite entender e aplicar as últimas tendências em tecnologia de maneira eficiente e efetiva. Acreditamos na importância da tecnologia para melhorar a qualidade de vida das pessoas e buscamos colaborar para isso com o Fintrack.</Text>
        </LinearGradient>
        <View style={styles.profileContainer}>
            <LinearGradient colors={['#69279c', '#6a2fa3', '#6a37aa', '#6a3eb1', '#6a46b8', '#6a4cbf', '#6a53c6', '#6a5acd']} style={styles.profile}>
              <Image style={styles.imageProfile} source={require('../../../assets/images/daniel.png')}></Image>
              <View style={styles.contact}>
                <Text style={styles.name}>Daniel Rosa</Text>
                <View style={styles.buttons}>
                  <Icon style={styles.button} name="logo-instagram" size={25} color="black"/>
                  <Icon style={styles.button} name="logo-linkedin" size={25} color="black"/>
                </View>
              </View>
            </LinearGradient>
            <LinearGradient colors={['#69279c', '#6a2fa3', '#6a37aa', '#6a3eb1', '#6a46b8', '#6a4cbf', '#6a53c6', '#6a5acd']} style={styles.profile}>
              <Image style={styles.imageProfile} source={require('../../../assets/images/diego.jpg')}></Image>
              <View style={styles.contact}>
                <Text style={styles.name}>Diego Pires</Text>
                <View style={styles.buttons}>
                  <Icon style={styles.button} name="logo-instagram" size={25} color="black"/>
                  <Icon style={styles.button} name="logo-linkedin" size={25} color="black"/>
                </View>
              </View>
            </LinearGradient>
            <LinearGradient colors={['#69279c', '#6a2fa3', '#6a37aa', '#6a3eb1', '#6a46b8', '#6a4cbf', '#6a53c6', '#6a5acd']} style={styles.profile}>
             <Image style={styles.imageProfile} source={require('../../../assets/images/joao.jpg')}></Image>
             <View style={styles.contact}>
              <Text style={styles.name}>João Cavalcanti</Text>
              <View style={styles.buttons}>
                <Icon style={styles.button} name="logo-instagram" size={25} color="black"/>
                <Icon style={styles.button} name="logo-linkedin" size={25} color="black"/>
              </View>
             </View>
            </LinearGradient>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  about: {
    backgroundColor: 'rgba(34,36,40,1)',
    height: '100%'
  },
  card:{
    backgroundColor: 'purple',
    margin:20,
    marginHorizontal: 40,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textTitle:{
    color:'white',
    fontSize: 25,
    fontFamily: 'Jost-Bold'
  },
  text:{
    marginTop:10,
    color: 'white',
    textAlign: 'left',
    fontFamily: 'Jost-Medium'
  },
  profile:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal:40,
    padding:20,
    borderRadius:15,
    backgroundColor: 'purple',  
  },
  imageProfile:{
    width:130,
    height:130,
    borderRadius:100
  },
  contact:{
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name:{
    fontFamily:'Jost-SemiBold',
    color: 'white',
  },
  buttons:{
    margin:20,
    width:90,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button:{
    padding:5,
    backgroundColor: '#D6BBE6',
    borderRadius:5
  }  
});