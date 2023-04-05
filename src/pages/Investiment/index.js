import * as React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View , TouchableOpacity, Dimensions, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Investiment() {

  const [inicial, setInicial] = React.useState('');
  const [final, setFinal] = React.useState('');
  const [aporte, setAporte] = React.useState('');
  const [tempo, setTempo] = React.useState('');
  const [resposta, setResposta] = useState({});

  async function bestInvestiment(){
    let url = ''
    
    url = `https://fee-calculator.onrender.com/investimento/inicial/${inicial}/mensal/${aporte}/final/${final}/tempo/${tempo}`
   
    await axios.get(url)
          .then(response => {
              if(response.data.in_time.length > 0){
                console.log('SOU MAIRO')
                setResposta(response.data);
              }else{
                console.log('SOU 0')
                setResposta({});
              }
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

  function InvestimentType(props){
    const [color, setColor] = useState('');
    const [icon, setIcon] = useState('');
    useEffect(() =>{  
      if(props.isInTime){
        setColor('#3CB371')
        setIcon('checkmark-circle-outline')
      }else{
        setColor('#B33C3C')
        setIcon('close-circle-outline')
      }
    },[props.isInTime])
    return(
      <View style={{width:280}}>
        <View style={{display:'flex', flexDirection: 'row', justifyContent:'center', backgroundColor:color, marginHorizontal:5,padding:10, borderTopLeftRadius:8, borderTopRightRadius:8}}>
          <Text style={styles.text}>{props.investimento.nome}</Text>
          <Icon name={icon} size={20} color="white"></Icon>
        </View>
        <View  style={{backgroundColor:'#636876', marginHorizontal:5, marginBottom:20, padding:10, borderBottomLeftRadius:8,  borderBottomRightRadius:8}}>
           <Text style={styles.text}>Taxa: <Text>{props.investimento.taxa_anual}%</Text></Text>
           <Text style={styles.text}>Número de aportes necessários para chegar ao objetivo: <Text>{props.investimento.n_aportes} meses</Text></Text>
        </View>
      </View>
    )
  } 

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
                    Investimento mensal (Em Reais):
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
                    Tempo para o Retorno(Anos):
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
                        <View style={{display:'flex', alignItems:'center'}}>
                          {resposta.in_time.map((investment) => {
                              return <InvestimentType key={investment.nome} investimento={investment} isInTime={true}></InvestimentType>;
                          })}
                          {resposta.not_in_time.map((investment) => {
                              return <InvestimentType key={investment.nome} investimento={investment} isInTime={false}></InvestimentType>;
                          })}
                          {
                            resposta.in_time.length > 0 ?
                            <Text style={{...styles.text, ...{marginHorizontal:40}}}>Seu objetivo pode ser alcançado em pelo menos um tipo de investimento de baixa volatilidade, desse modo apresentando pouco risco e ainda assim rendendo o suficiente.</Text>
                            :
                            <Text style={{...styles.text, ...{marginHorizontal:40}}}>Seu objetivo não pode ser alcançado com as taxas atuais dos investimentos de baixo risco, sendo necessária a procura por métodos alternativos e mais voláteis.
Lembre-se de tomar cuidado com esses tipos de investimento e de procurar profissionais para auxiliar.</Text>
                          }
                      </View>
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
    fontFamily:'Jost-SemiBold', 
    fontSize:16, 
    marginHorizontal:5,
    color:'white',
    textAlign:'justify'
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
