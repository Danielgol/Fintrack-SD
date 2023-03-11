import * as React from 'react';
import { useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import CoinModal from '../../components/Modal/CoinModal';
import { ScrollView } from 'react-native-gesture-handler';

export default function Quotes() {
  const [quotes, setQuotes] = useState(true);
  const [cor, setCor] = useState('#6A5ACD');
  const [cor2, setCor2] = useState('#A9A9A9');
  const [textColor, setTextColor] = useState('#fff');
  const [textColor2, setTextColor2] = useState('#000');
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState('BRL');

  function handleClickCotacao() {
      setCor('#6A5ACD');
      setCor2('#A9A9A9');
      setTextColor('#fff');
      setTextColor2('#000');
      setQuotes(true)
  }

  function handleClickAcao(){
      setCor('#A9A9A9');
      setCor2('#6A5ACD');
      setTextColor('#000');
      setTextColor2('#fff');
      setQuotes(false)
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
      <TouchableOpacity style={{backgroundColor: cor, padding: 5, borderColor:'black', borderTopLeftRadius:10, borderBottomLeftRadius: 10, borderWidth: 0.5, width:'30%', alignItems:'center'}} onPress={handleClickCotacao}>
          <Text style={{ fontFamily:'Jost-Medium', fontSize:18, marginHorizontal:5, color: textColor}}>Cotações</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: cor2, padding: 5, borderColor:'black', borderWidth: 0.5, width:'30%', alignItems:'center', borderTopRightRadius:10, borderBottomRightRadius: 10}} onPress={handleClickAcao}>
          <Text style={{ fontFamily:'Jost-Medium', fontSize:18, marginHorizontal:5, color: textColor2}}>Ações</Text> 
        </TouchableOpacity>
      </View>
      
      <View style={styles.selectCoin}>
        <Text style={styles.textSelectCoin}>Escolha sua moeda:</Text>
        <RNPickerSelect placeholder={{}} onValueChange={(value) => (value) ? setSelectedCoin(value) : setSelectedCoin('BRL')} items={coinsObject}>
                  <TouchableOpacity style={styles.buttonCoin}>
                    <Text style={styles.textSelect}>{selectedCoin}</Text> 
                    <Icon name="chevron-down-outline" size={20} color="white"></Icon>
                  </TouchableOpacity>
        </RNPickerSelect>
      </View>
      <View style={{height: '75%'}}>
        <ScrollView style={styles.results}>
          {coinsObject.map((coin) => (
            <CoinModal key={coin.label} selectedCoin={selectedCoin} coin={coin.label}/>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quotes: {
    backgroundColor: '#444850',
    height: '100%'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent:'center',
    marginTop: 15,
    borderRadius: 100,
  },
  selectCoin:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginHorizontal: 30,
    backgroundColor: '#6A5ACD', 
    padding: 5, 
    borderColor:'black', 
    borderWidth: 0.5, 
    alignItems:'center',
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  buttonCoin:{

    flexDirection:'row',
    marginRight: 5,
    borderRadius: 10,
    paddingRight: 5,
    paddingLeft: 3,
 
  },
  text: {
    fontFamily:'Jost-Medium', 
    fontSize:18, 
    marginHorizontal:5,
  },
  textSelectCoin: {
    fontFamily:'Jost-Medium',
    fontSize:18,
    marginHorizontal:5,
    color: '#fff',
  },
  textSelect: {
    fontFamily:'Jost-Medium',
    fontSize:18,
    marginHorizontal:5,
    color: '#fff'
  },
  results:{
    backgroundColor: '#222428',
    marginHorizontal: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor:'black', 
    borderWidth: 0.5, 
    paddingVertical: 10,
  }

});