import * as React from 'react';
import { useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import CoinModal from '../../components/Modal/CoinModal';
import { all, primoryCoins } from '../../resources/resources'
import { ScrollView } from 'react-native-gesture-handler';

export default function Converter() {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState('BRL');
  const [selectedCoin2, setSelectedCoin2] = useState('USD');
  const [valueConv, setValueConv] = useState(0)
  const [value, setValue] = useState(0)


  const handleValueChange = (value) => {
    setValue(value);
    requestValue(value)
  };

  function requestValue(value){
    axios.get(`https://economia.awesomeapi.com.br/json/${selectedCoin}-${selectedCoin2}`)
        .then(response => {
            setValueConv((value * parseFloat(response.data[0]['bid'])).toFixed(2));
        })
        .catch(error => {
            setValueConv(0);
        });
  }
  const conversorCoin = (selectedCoin === 'BRL' ||  selectedCoin === 'USD' || selectedCoin === 'EUR') ? all.filter((coin) => coin.value !== selectedCoin) : primoryCoins.filter((coin) => coin.value !== selectedCoin)

  const coinsObject = [{label: 'BRL', value: 'BRL'}].concat(coins.map((coin) => {
    return { label: coin, value: coin };
  })).filter(obj => obj.label !== 'USDT');

  useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/all')
        .then(response => {
          setCoins(Object.keys(response.data).map(key => key))
        })
        .catch(error => {
          console.log(error);
        });
  }, [])

  useEffect(() => {
    requestValue(value);
  }, [selectedCoin, selectedCoin2]);

  return (
    <View style={styles.quotes}>
        <View style={styles.selectCoin}>
            <Text style={styles.textSelectCoin}>De:</Text>
            <RNPickerSelect placeholder={{}} onValueChange={(value) => setSelectedCoin(value)} items={coinsObject}>
                    <TouchableOpacity style={styles.buttonCoin}>
                        <Text style={styles.textSelect}>{selectedCoin}</Text> 
                        <Icon name="chevron-down-outline" size={20} color="white"></Icon>
                    </TouchableOpacity>
            </RNPickerSelect>
        </View>
        <View style={{height: '25%'}}>
            <TextInput
                style={styles.results}
                keyboardType='numeric'
                placeholder="0.00"
                placeholderTextColor='#fff'
                onChangeText={handleValueChange}
            />
        </View>
        <View style={styles.selectCoin}>
            <Text style={styles.textSelectCoin}>Para:</Text>
            <RNPickerSelect placeholder={{}} onValueChange={(value) => setSelectedCoin2(value)} items={conversorCoin}>
                    <TouchableOpacity style={styles.buttonCoin}>
                        <Text style={styles.textSelect}>{selectedCoin2}</Text> 
                        <Icon name="chevron-down-outline" size={20} color="white"></Icon>
                    </TouchableOpacity>
            </RNPickerSelect>
        </View>
        <View style={{height: '25%'}} >
            <Text style={styles.results}>{valueConv}</Text>
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
    padding:40,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor:'black', 
    borderWidth: 0.5, 
    paddingVertical: 10,
    fontSize:40,
    textAlign:'center',
    height: '100%',
    fontFamily:'Jost-SemiBold',
    textAlignVertical:'center',
    color:'#fff'
    }
});