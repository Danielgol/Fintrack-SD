import * as React from 'react';
import axios from 'axios';
import {StyleSheet, Text, View , TouchableOpacity, Dimensions, TextInput} from 'react-native';
import LargeButton from '../../components/Modal/LargeModal';
import Icon from 'react-native-vector-icons/Ionicons';
import TextModal from '../../components/Modal/TextModal';


const { width, height } = Dimensions.get("screen");

export default function Fees() {

  const [capital, setCapital] = React.useState('');
  const [taxa, setTaxa] = React.useState('');
  const [tempo, setTempo] = React.useState('');
  const [resposta, setResposta] = React.useState('');
  
  function calculateFees(){
    const url = `https://fee-calculator.onrender.com/jurosSimples/capital/${capital}/taxa/${taxa}/tempo/${tempo}`
    axios.get(url)
        .then(response => {
          //setResposta(response);
          alert(response.data);
          setResposta(response.data);
        }).catch(error => {
          //setResposta(error);
          alert(error)
        });
  }

  const handleCapitalChange = (capital) => {
    setCapital(capital);
  };

  const handleTaxaChange = (taxa) => {
    setTaxa(taxa);
  };

  const handleTempoChange = (tempo) => {
    setTempo(tempo);
  };

  return (
    <View style={styles.calculator}>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>
              Valor inicial:
          </Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder="Digite o valor inicial"
            onChangeText={(text) => handleCapitalChange(text)}
            //value={String(props.auxValue)}
          />
        </View>
        <View>
          <Text style={styles.label}>
            Taxa de Juros:
          </Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder="Digite a taxa de juros"
            onChangeText={(text) => handleTaxaChange(text)}
            //value={String(props.auxValue)}
          />
        </View>
        <View>
          <Text style={styles.label}>
            Tempo de Pagamento:
          </Text>
          <TextInput
            style={styles.input}
            //autoFocus={true}
            keyboardType='numeric'
            placeholder="Digite o tempo do pagamento"
            onChangeText={(text) => handleTempoChange(text)}
            //value={String(props.auxValue)}
          />
        </View>
        <View>
          <TouchableOpacity onPress={ () => calculateFees()}>
            <Text>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculator: {
    backgroundColor: '#444850',
    height: '100%'
  },
  container:{
    marginHorizontal: '20%',
    height: '100%',
    paddingTop: 20,
    alignItems: 'center',
  },
  input: {
    borderRadius:8,
    padding:10,
    fontSize:15,
    width:210,
    elevation:4,
    backgroundColor:'#B2B2B2',
    fontFamily: 'Jost-Regular',
    
  },
  label:{
    marginTop: 20,
    marginBottom: 5,
    color: '#fff',
    fontFamily: 'Jost-SemiBold',
  }
});
