import * as React from 'react';
import {StyleSheet, Text, View, Image, ScrollView,TouchableOpacity} from 'react-native';
import CoinDetails from '../../components/Modal/CoinDetails';
import ExchangeDetails from '../../components/Modal/ExchangeDetails';

export default function Details({route}) {
  const { type, data } = route.params;

  function Modal() {
    if (type === 'coin') {
      return  <CoinDetails data={data}/>
    }
    if (type === 'exchange') {
       return  <ExchangeDetails data={data}/>
    }
    return null;
  }

  return (
    <View style={{height:'100%'}}>
        <Modal></Modal>
    </View>
  );
}

const styles = StyleSheet.create({

});