import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExchangeModal(props) {
  const navigation = useNavigation();

    return(
      <TouchableOpacity onPress={() => navigation.navigate('Detalhes', {type:'exchange', data: props.exchange})}>
        <View style={styles.selectCoin}> 
            <Text style={styles.text}>{props.exchange}</Text>    
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    selectCoin:{
      marginHorizontal: 30,
      marginVertical:7,
      flexDirection: 'row',
      justifyContent:'space-between',
      backgroundColor: '#6A5ACD', 
      padding: 5, 
      borderColor:'black', 
      borderWidth:1, 
      alignItems:'center',
      borderRadius: 5
    },
    text: {
      fontFamily:'Jost-Medium',
      fontSize:16,
      marginHorizontal:5,
      color: '#fff'
    }
  
  });