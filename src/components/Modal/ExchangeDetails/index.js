import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function ExchangeDetails(props){
    const API_KEY = 'XEWZ5LDNHM5H4FCN'; 
    const [dataSearch, setDataSearch] = useState({})

    useEffect(() => {
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${props.data}&apikey=${API_KEY}`)
            .then(response => {
                setDataSearch(response.data.bestMatches[0]);
            })
            .catch(error => {
              console.log(error);
              setDataSearch(null)
            });
      }, [props.data])
      const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${props.data}&apikey=${API_KEY}`)
            .then(response => {
                setData(response.data['Global Quote']);
            })
            .catch(error => {
                console.log(error);
                setData(null)
            });
    }, [props.data])
    return(
        <View style={styles.details}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Cotação</Text>
            </View>
            <View style={{height: '75%'}}>
                <ScrollView style={styles.results}>
                    {
                        dataSearch && data ? 
                        <View>
                            <Text style={styles.text}>Ação: {dataSearch['2. name']}({dataSearch['1. symbol']})</Text>
                            <Text style={styles.text}>Valor: {data["05. price"]}({dataSearch['8. currency']})</Text>
                            <Text style={styles.text}>Região: {dataSearch['4. region']}</Text>
                            <Text style={styles.text}>Variação: {data['09. change']}({data['10. change percent']})</Text>
                            <Text style={styles.text}>Pico do dia: {data["03. high"]}({dataSearch['8. currency']})</Text>
                            <Text style={styles.text}>Baixa do dia: {data["04. low"]}({dataSearch['8. currency']})</Text>
                            <Text style={styles.text}>Fechamento anterior: {data["08. previous close"]}({dataSearch['8. currency']})</Text>
                        </View>
                        :
                        <View>
                            <Text style={styles.textWarning}>API Indisponível</Text>
                            <Text style={styles.textWarning}>Tente novamente em 1 minuto</Text>
                        </View>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        backgroundColor: '#444850',
        height: '100%'
    },
    textHeader: {
        fontFamily:'Jost-SemiBold',
        fontSize:21,
        marginHorizontal:15,
        color: '#fff',
    },
    textWarning: {
        fontFamily:'Jost-Bold',
        fontSize:18,
        textAlign:'center',
        color: '#fff',
    },
    text:{
        fontFamily:'Jost-Regular',
        fontSize:20,
        marginHorizontal:20,
        marginVertical:10,
        color: '#fff',
    },
    header:{
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
    results:{
        backgroundColor: '#222428',
        marginHorizontal: 30,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderColor:'black', 
        borderWidth: 0.5, 
        paddingVertical: 10,
    }
})