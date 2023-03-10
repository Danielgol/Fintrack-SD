import * as React from 'react';
import { useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import CoinModal from '../../components/Modal/CoinModal';

export default function Quotes() {
  const [quotes, setQuotes] = useState(true);
  const [cor, setCor] = useState('#6A5ACD');
  const [cor2, setCor2] = useState('#A9A9A9');
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState('BRL');

  function handleClick() {
    if (quotes) {
      setCor('#A9A9A9');
      setCor2('#6A5ACD');
      setQuotes(false)
    } else {
      setCor('#6A5ACD');
      setCor2('#A9A9A9');
      setQuotes(true)
    }
  }

  const coinsObject = [{label: 'BRL', value: 'BRL'}].concat(coins.map((coin) => {
    return { label: coin, value: coin };
  }));

  useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/all')
        .then(response => {
          // Trata a resposta da API aqui
          setCoins(Object.keys(response.data).map(key => key))
        })
        .catch(error => {
          // Trata erros na requisição aqui
          console.log(error);
        });
  }, [])

  return (
    <View style={styles.quotes}>
      <View style={styles.buttons}>
      <TouchableOpacity style={{backgroundColor: cor, padding: 5, borderColor:'black', borderWidth:1, width:'30%', alignItems:'center'}} onPress={handleClick}>
          <Text style={styles.text}>Cotações</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: cor2, padding: 5, borderColor:'black', borderWidth:1, width:'30%', alignItems:'center'}} onPress={handleClick}>
          <Text style={styles.text}>Ações</Text> 
        </TouchableOpacity>
      </View>
      <View style={styles.selectCoin}>
        <Text style={styles.text}>Escolha sua moeda:</Text>
        <RNPickerSelect placeholder={{}} onValueChange={(value) => (value) ? setSelectedCoin(value) : setSelectedCoin('BRL')} items={coinsObject}>
                  <View style={styles.buttons}>
                    <Text style={styles.text}>{selectedCoin}</Text> 
                    <Icon name="chevron-down-outline" size={20} color="black"></Icon>
                  </View>
        </RNPickerSelect>
      </View>
      {coinsObject.map((coin) => (
        <CoinModal key={coin.label} selectedCoin={selectedCoin} coin={coin.label}/>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  quotes: {
    backgroundColor: 'rgba(34,36,40,1)',
    height: '100%'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent:'center',
  },
  selectCoin:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginHorizontal: 40,
    backgroundColor: '#A9A9A9', 
    padding: 5, 
    borderColor:'black', 
    borderWidth:1, 
    alignItems:'center',
    marginVertical: 20,
    borderRadius: 5
  },
  text: {
    fontFamily:'Jost-Medium',
    fontSize:18,
    marginHorizontal:5
  }

});