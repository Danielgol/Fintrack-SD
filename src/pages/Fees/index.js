import * as React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View , TouchableOpacity, Dimensions, TextInput} from 'react-native';
import LargeButton from '../../components/Modal/LargeModal';
import Icon from 'react-native-vector-icons/Ionicons';
import TextModal from '../../components/Modal/TextModal';
import ExchangeModal from '../../components/Modal/ExchangeModal';
import { ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get("screen");

export default function Fees() {

  const [capital, setCapital] = React.useState('');
  const [taxa, setTaxa] = React.useState('');
  const [tempo, setTempo] = React.useState('');
  const [resposta, setResposta] = React.useState('');
  const [fees, setFees] = useState(true);
  const [cor, setCor] = useState('#6A5ACD');
  const [cor2, setCor2] = useState('#A9A9A9');
  const [textColor, setTextColor] = useState('#fff');
  const [textColor2, setTextColor2] = useState('#000');
  
  function calculateFees(){
    let url = ''
    if(fees){
      url = `https://fee-calculator.onrender.com/jurosSimples/capital/${capital}/taxa/${taxa/100}/tempo/${tempo}`
    }else{
      url = `https://fee-calculator.onrender.com/jurosCompostos/capital/${capital}/taxa/${taxa/100}/tempo/${tempo}`
    }
   
    axios.get(url)
        .then(response => {
          const resultado = 'R$ ' + parseFloat(response.data).toFixed(2);
          setResposta(resultado);
        }).catch(error => {
          setResposta('Verifique novamente os campos!')
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

  function handleClickSimples() {
    setResposta('');
    setCor('#6A5ACD');
    setCor2('#A9A9A9');
    setTextColor('#fff');
    setTextColor2('#000');
    setFees(true)
}

function handleClickComposto(){
    setResposta('');
    setCor('#A9A9A9');
    setCor2('#6A5ACD');
    setTextColor('#000');
    setTextColor2('#fff');
    setFees(false)
}

  return (

    <View style={styles.calculator}>
      <View style={styles.buttons}>
        <TouchableOpacity style={{backgroundColor: cor, padding: 5, borderColor:'black', borderTopLeftRadius:10, borderBottomLeftRadius: 10, borderWidth: 0.5, width:'30%', alignItems:'center'}} onPress={handleClickSimples}>
          <Text style={{ fontFamily:'Jost-Medium', fontSize:18, marginHorizontal:5, color: textColor}}>Simples</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: cor2, padding: 5, borderColor:'black', borderWidth: 0.5, width:'30%', alignItems:'center', borderTopRightRadius:10, borderBottomRightRadius: 10}} onPress={handleClickComposto}>
          <Text style={{ fontFamily:'Jost-Medium', fontSize:18, marginHorizontal:5, color: textColor2}}>Composto</Text> 
        </TouchableOpacity>
      </View>
        {
          fees ?
            <View style={styles.calculator}>
              <View style={styles.selectJuros}>
                <Text style={styles.textSelectJuros}>Juros Simples</Text>
              </View>
              <View style={styles.results}>
                <View>
                  <Text style={styles.label}>
                      Valor inicial (Em Reais):
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
                    Taxa de Juros (%):
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
                    Tempo de Pagamento (Meses):
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
                  <TouchableOpacity style={styles.button} onPress={ () => calculateFees()}>
                    <Text style={styles.textButton}>Calcular</Text>
                  </TouchableOpacity>
                </View>
                {resposta ? 
                  <View style={styles.feeStyle}>
                    <Text style={styles.feeResponse}>{resposta}</Text>
                  </View>
                :
                null
                }
              </View>
            </View>
            :
            <View style={styles.calculator}>
            <View style={styles.selectJuros}>
              <Text style={styles.textSelectJuros}>Juros Composto</Text>
            </View>
            <View style={styles.results}>
              <View>
                <Text style={styles.label}>
                    Valor inicial (Em Reais):
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
                  Taxa de Juros (%):
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
                  Tempo de Pagamento (Meses):
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
                <TouchableOpacity style={styles.button} onPress={ () => calculateFees()}>
                  <Text style={styles.textButton}>Calcular</Text>
                </TouchableOpacity>
              </View>
              {resposta ? 
                <View style={styles.feeStyle}>
                  <Text style={styles.feeResponse}>{resposta}</Text>
                </View>
              :
              null
              }
            </View>
          </View>
        }
    </View>
        
  );
}

const styles = StyleSheet.create({
  calculator: {
    backgroundColor: '#444850',
    height: '100%'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent:'center',
    marginTop: 15,
    borderRadius: 100,
  },
  selectJuros:{
    justifyContent:'center',
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
  text: {
    fontFamily:'Jost-Medium', 
    fontSize:18, 
    marginHorizontal:5,
  },
  textSelectJuros: {
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
  },
  textButton: {
    color:'white',
    fontFamily:'Jost-Bold',
    fontSize:18
  },
   button:{
    display:'flex',
    alignItems: 'center',
    padding:10,
    marginTop:30,
    backgroundColor:'#6A5ACD',
    width:'100%',
    borderRadius: 10
  },
  feeStyle: {
    marginTop: 20,
    color: '#fff',
    alignItems:'center',
    backgroundColor: '#3CB371',
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  feeResponse:{
    color: '#fff',
    fontFamily: 'Jost-SemiBold',
    fontSize: 20
  }
});
