import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const STORAGE_KEY = 'investorProfile';

export default function Profile() {

  const [data, setData] = useState('');
  const [answers, setAnswers] = useState([]);
  const [formActive, setFormActive] = useState(false);

  const handleSetData = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, value);
      setData(value);
    } catch (error) {
      console.log('Error setting data:', error);
    }
  };

  const handleGetData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      setData(value);
    } catch (error) {
      console.log('Error getting data:', error);
    }
  };

  useEffect(() =>{
    handleGetData();
  },[])

  function verifyProfile(){
    let Conservador = 0;
    let ConservadorModerado = 0;
    let Neutro = 0;
    let ArrojadoModerado = 0;
    let Arrojado = 0;

    for (let i = 0; i < answers.length; i++) {
      const type = answers[i];
      switch (type) {
        case 'C':
          Conservador++;
          break;
        case 'PC':
          ConservadorModerado++;
          break;
        case 'N':
          Neutro++;
          break;
        case 'PA':
          ArrojadoModerado++;
          break;
        case 'A':
          Arrojado++;
          break;
        default:
          break;
      }
    }
    const counts = {
      Conservador,
      ConservadorModerado,
      Neutro,
      ArrojadoModerado,
      Arrojado,
    };
    let mostFrequentType = null;
    let maxCount = 0;
    for (const [type, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        mostFrequentType = type;
      }
    }

    handleSetData(mostFrequentType)

    if(mostFrequentType === 'Conservador'){
      if(Conservador === Arrojado){
        handleSetData('Neutro')
      }
      if(Conservador === ArrojadoModerado || Conservador === Neutro){
        handleSetData('ConservadorModerado')
      }
    }else if(mostFrequentType === 'ConservadorModerado'){
      if(ConservadorModerado === Arrojado){
        handleSetData('ArrojadoModerado')
      }
      if(ConservadorModerado === ArrojadoModerado){
        handleSetData('Neutro')
      }
      if(ConservadorModerado === Conservador){
        handleSetData('Conservador')
      }
    }else if(mostFrequentType === 'Arrojado'){
      if(Arrojado === Conservador){
        handleSetData('Neutro')
      }
      if(Arrojado === ConservadorModerado || Arrojado === Neutro){
        handleSetData('ArrojadoModerado')
      }
    }else if(mostFrequentType === 'ArrojadoModerado'){
      if(ArrojadoModerado === Conservador){
        handleSetData('ConservadorModerado')
      }
      if(ArrojadoModerado === ConservadorModerado){
        handleSetData('Neutro')
      }
      if(ArrojadoModerado === Arrojado){
        handleSetData('Arrojado')
      }
    }else if(mostFrequentType === 'Neutro'){
      if(Neutro === Conservador || Neutro === ConservadorModerado){
        handleSetData('ConservadorModerado')
      }
      if(Neutro === Arrojado || Neutro === ArrojadoModerado){
        handleSetData('ArrojadoModerado')
      }
  }
}

  function FirstQuestion() {
    return (
      <View>
        <View style={styles.modal}>
          <Text style={styles.textHeader}>Pergunta 1</Text>
        </View>
        <View style={styles.contentModal}>
          <Text style={styles.questionText}>Tenho situação financeira estável?</Text>
          <AnswerOptions type='Conservador'></AnswerOptions>
          <BackButton></BackButton>
        </View>
      </View>
    )
  }

  function SecondQuestion() {
    return (
      <View>
        <View style={styles.modal}>
          <Text style={styles.textHeader}>Pergunta 2</Text>
        </View>
        <View style={styles.contentModal}>
          <Text style={styles.questionText}>Aceito assumir riscos no curto prazo, pois acredito que no longo prazo o retorno será maior.</Text>
          <AnswerOptions type='Arrojado'></AnswerOptions>
          <BackButton></BackButton>
        </View>
      </View>
    )
  }

  function ThirdQuestion() {
    return (
      <View>
        <View style={styles.modal}>
          <Text style={styles.textHeader}>Pergunta 3</Text>
        </View>
        <View style={styles.contentModal}>
          <Text style={styles.questionText}>Ganhar o máximo que puder é importante para mim, mesmo que eu tenha que correr algum risco de perder parte do capital investido.</Text>
          <AnswerOptions type='Arrojado'></AnswerOptions>
          <BackButton></BackButton>
        </View>
      </View>
        
    )
  }

  function FourthQuestion() {
    return (
      <View>
        <View style={styles.modal}>
          <Text style={styles.textHeader}>Pergunta 4</Text>
        </View>
        <View style={styles.contentModal}>
          <Text style={styles.questionText}>Prefiro ver meus investimentos crescendo constantemente, sem altos e baixos, mesmo que no longo prazo eu tenha retorno menor.</Text>
          <AnswerOptions type='Conservador'></AnswerOptions>
          <BackButton></BackButton>
        </View>
      </View>
    )
  }

  function FifthQuestion() {
    return (
      <View>
        <View style={styles.modal}>
          <Text style={styles.textHeader}>Pergunta 5</Text>
        </View>
        <View style={styles.contentModal}>
          <Text style={styles.questionText}>Evitar perdas neste ano é mais importante do que crescimento a longo prazo. Eu quero protejer minha poupança a curto prazo.</Text>
          <AnswerOptions type='Conservador'></AnswerOptions>
          <BackButton></BackButton>
        </View>
      </View>
    )
  }

  function SixthQuestion() {
    return (
      <View>
        <View style={styles.modal}>
          <Text style={styles.textHeader}>Pergunta 6</Text>
        </View>
        <View style={styles.contentModal}>
          <Text style={styles.questionText}>Tenho razoável experiência e conhecimento de fundos de investimento.</Text>
          <AnswerOptions type='Arrojado'></AnswerOptions>
          <BackButton></BackButton>
        </View>
      </View>
    )
  }

  function AnswerOptions({type}){
    return ( 
      <View style={{width: '80%'}}>
        <TouchableOpacity style={styles.question} onPress={ () => type === 'Conservador' ? setAnswers(answers.concat(['C'])) :  setAnswers(answers.concat(['A']))}>
          <Text style={styles.text}>Concordo Totalmente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.question} onPress={ () => type === 'Conservador' ? setAnswers(answers.concat(['PC'])) :  setAnswers(answers.concat(['PA']))}>
          <Text style={styles.text}>Concordo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.question} onPress={ () => setAnswers(answers.concat(['N']))}>
          <Text style={styles.text}>Neutro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.question} onPress={ () => type === 'Conservador' ? setAnswers(answers.concat(['PA'])) :  setAnswers(answers.concat(['PC']))}>
          <Text style={styles.text}>Discordo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.question} onPress={ () => type === 'Conservador' ? setAnswers(answers.concat(['A'])) :  setAnswers(answers.concat(['C']))}>
          <Text style={styles.text}>Discordo Totalmente</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  function BackButton(){
    return(
      <View style={{display:'flex', justifyContent:'center'}}>
      {
        answers.length !== 0 ?
        <TouchableOpacity style={styles.buttonBack} onPress={ () => setAnswers(answers.slice(0, -1))}>
          <Text style={styles.textButtonBack}>Voltar para Última Questão</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.buttonBack} onPress={ () => setFormActive(false)}>
          <Text style={styles.textButtonBack}>Voltar</Text>
        </TouchableOpacity>
      }
      </View>
    )
  }

  function ConfirmPage(){
    return(
      <View>
        <View style={styles.modal}>
          <Text style={styles.textHeader}>Concluir Teste</Text>
        </View>
        <View style={styles.contentModal}>
          <Text style={styles.questionText}>Parabéns, você acaba de concluir o teste de perfil de investimento. Para descobrir qual o seu Perfil basta confirmar, mas caso deseje alterar alguma resposta basta voltar ao formulário</Text>
          <BackButton></BackButton>
          <TouchableOpacity style={styles.confirmButton} onPress={() => verifyProfile()}>
            <Text style={styles.textButtonConfirm}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.profile}>
        {
          data === '' ?
          <View>
          {
            formActive ?
            <View>
              {
                answers.length === 0 ?
                <FirstQuestion></FirstQuestion> : null
              }
              {
                answers.length === 1 ?
                <SecondQuestion></SecondQuestion>: null
              }
              {
                answers.length === 2 ?
                <ThirdQuestion></ThirdQuestion> : null
              }
              {
                answers.length === 3 ?
                <FourthQuestion></FourthQuestion> : null
              }
               {
                answers.length === 4 ?
                <FifthQuestion></FifthQuestion> : null
              }
               {
                answers.length === 5 ?
                <SixthQuestion></SixthQuestion> : null
              }
              {
                answers.length === 6 ?
                <ConfirmPage></ConfirmPage>
                : null
              }
            </View>
            : 
            <View>
              <View style={styles.modal}>
                <Text style={styles.textHeader}>Perfil</Text>
              </View>
              <View style={{height: '80%'}}>
                <View style={{...styles.contentModal, padding:40 }}>
                  <Icon name='person-circle-outline' size={150} color="#6A5ACD"/>
                  <Text style={styles.text}>Você ainda não possui um perfil de investimento, que tal descobrir agora mesmo?!</Text>
                  <TouchableOpacity style={styles.button} onPress={() => setFormActive(true)}>
                    <Text style={styles.textButton}>Iniciar Teste</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
          </View>
          :
          <View>
              <View style={styles.modal}>
                <Text style={styles.textHeader}>Perfil</Text>
              </View>
              <View style={{height: '80%'}}>
                <View style={{...styles.contentModal, padding:40 }}>
                  <Icon name='person-circle-outline' size={150} color="#6A5ACD"/>
                  <Text style={{fontFamily:'Jost-Bold', fontSize: 21, color:'white'}}>{data}</Text>
                  <Text style={styles.text}>Texto personalizado para o tipo de perfil desse usuário</Text>
                  <TouchableOpacity style={styles.button} onPress={ () => {handleSetData(''); setAnswers([]); setFormActive(false)}}>
                    <Text style={styles.textButton}>Refazer Teste</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
          }
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    backgroundColor: '#444850',
    height: '100%'
  },
  textHeader: {
    fontFamily:'Jost-SemiBold',
    fontSize:21,
    marginHorizontal:15,
    color: '#fff',
  },
  modal:{
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
  text:{ 
    color:'white',
    fontFamily:'Jost-SemiBold',
    fontSize:15,
    textAlign:'justify'
  },
  textButton: {
    color:'white',
    fontFamily:'Jost-Bold',
    fontSize:18
  },
  textButtonBack: {
    color:'black',
    fontFamily:'Jost-SemiBold',
    fontSize:14
  },
  textButtonConfirm:{
    color:'white',
    fontFamily:'Jost-SemiBold',
    fontSize:14
  },
  contentModal:{
    display:'flex',
    alignItems: 'center',
    backgroundColor: '#222428',
    marginHorizontal: 30,
    padding:15,
    paddingBottom:30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor:'black', 
    borderWidth: 0.5, 
    paddingVertical: 10,
    fontSize:40,
    textAlign:'center',
    fontFamily:'Jost-SemiBold',
    textAlignVertical:'center',
    color:'#fff'
  },
  button:{
    display:'flex',
    alignItems: 'center',
    padding:10,
    marginTop:30,
    backgroundColor:'#6A5ACD',
    width:'100%',
    borderRadius: 20
  },
  buttonBack:{
    display:'flex',
    alignItems: 'center',
    padding:10,
    marginTop:10,
    backgroundColor:'#A9A9A9',
    width:'100%',
    borderRadius: 8
  },
  confirmButton:{
    display:'flex',
    alignItems: 'center',
    padding:10,
    marginTop:10,
    backgroundColor:'#6A5ACD',
    width:'100%',
    borderRadius: 8
  },
  question:{
    padding:10,
    backgroundColor:'#6A5ACD',
    width: '100%',
    borderRadius: 8,
    marginVertical:10
  },
  questionText:{
    color:'white',
    fontFamily:'Jost-SemiBold', 
    fontSize: 17,
    textAlign:'justify',
    marginHorizontal:10,
    marginBottom:20,
  }
});