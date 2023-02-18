import * as React from 'react';
import {StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import LargeButton from '../../components/Modal/LargeModal';
import Icon from 'react-native-vector-icons/Ionicons';
import TextModal from '../../components/Modal/TextModal';

export default function Calculator() {
  return (
    <View style={styles.calculator}>
      <View style={styles.container}>
        <TextModal title="Investimento" text="Insira o seu objetivo e veja os melhores locais para realizar um investimento"></TextModal>
        <TextModal title="Juros" text="Calcule de diferentes maneiras como os juros irá lhe afetar"></TextModal>
      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  calculator: {
    backgroundColor: 'rgba(34,36,40,1)',
    height: '100%'
  },
  container:{
    marginHorizontal: '20%',
    height: '100%'
  },
});