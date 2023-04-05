import * as React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View , TouchableOpacity, Dimensions, TextInput, ScrollView} from 'react-native';

export default function Investiment() {

  const [inicial, setInicial] = React.useState('');
  const [final, setFinal] = React.useState('');
  const [aporte, setAporte] = React.useState('');
  const [tempo, setTempo] = React.useState('');
  const [resposta, setResposta] = useState({});

  function bestInvestiment(){
    let url = ''
    
    url = `https://fee-calculator.onrender.com/investimento/inicial/${inicial}/mensal/${aporte}/final/${final}/tempo/${tempo}`
   
    axios.get(url)
        .then(response => {
          console.log(response.data)
          console.log(response.data.in_time)
          console.log(response.data.in_time === [])
          console.log(response.data.not_in_time)
          console.log(response.data.not_in_time === [])
          setResposta(response.data);
        }).catch(error => {
          console.log('Erro')
        });
  }

  const handleInicialChange = (inicial) => {
    setInicial(inicial);
  };

  const handleFinalChange = (final) => {
    setFinal(final);
  };

  const handleAporteChange = (aporte) => {
    setAporte(aporte);
  };

  const handleTempoChange = (tempo) => {
    setTempo(tempo);
  };

  return (

    <ScrollView style={styles.calculator}>
            <View style={styles.calculator}>
              <View style={styles.selectJuros}>
                <Text style={styles.textSelectJuros}>Investimento</Text>
              </View>
              <View style={styles.results}>
                <View>
                  <Text style={styles.label}>
                      Valor inicial(Em Reais):
                  </Text>
                  <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder="Digite o valor inicial"
                    onChangeText={(text) => handleInicialChange(text)}
                  />
                </View>
                <View>
                  <Text style={styles.label}>
                    Valor do objetivo(Em Reais):
                  </Text>
                  <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder="Digite o valor objetivo"
                    onChangeText={(text) => handleFinalChange(text)}
                  />
                </View>
                <View>
                  <Text style={styles.label}>
                    Valor do aporte(Em Reais):
                  </Text>
                  <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder="Digite o valor do aporte"
                    onChangeText={(text) => handleAporteChange(text)}
                  />
                </View>
                <View>
                  <Text style={styles.label}>
                    Tempo para o Retorno(Meses):
                  </Text>
                  <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder="Digite o tempo esperado"
                    onChangeText={(text) => handleTempoChange(text)}
                  />
                </View>
                <View>
                  <TouchableOpacity style={styles.button} onPress={ () => bestInvestiment()}>
                    <Text style={styles.textButton}>Calcular</Text>
                  </TouchableOpacity>
                </View>
              </View>
               {
                resposta.investido ?
                <View>
                    <View style={styles.selectJuros}>
                        <Text style={styles.textSelectJuros}>Resultado</Text>
                    </View>
                    <View style={styles.results}>
                        {
                            resposta.not_in_time === [] ?
                            <View>
                               {resposta.in_time.map((investment) => {
                                    return <Text key={investment.nome}>A</Text>;
                                })}
                            </View>
                            :
                            <Text>Texto explicando que é melhor investir em alto risco</Text>
                        }
                    </View>
                </View>
                : null
               } 
            </View>
    </ScrollView>
        
  );
}

const styles = StyleSheet.create({
  calculator: {
    backgroundColor: '#444850',
    height: '100%'
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
  }
});
