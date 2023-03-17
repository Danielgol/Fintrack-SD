import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function CoinDetails(props){
    return(
        <View style={styles.details}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Cotação</Text>
            </View>
            <View style={{height: '75%'}}>
                <ScrollView style={styles.results}>
                    <Text style={styles.text}>De: {props.data.name.split('/')[0]} ({props.data.code})</Text>
                    <Text style={styles.text}>Para: {props.data.name.split('/')[1]} ({props.data.codein})</Text>
                    <Text style={styles.text}>Valor: {props.data.bid} ({props.data.pctChange}%)</Text>
                    <Text style={styles.text}>Variação: {props.data.varBid}</Text>
                    <Text style={styles.text}>Pico do dia: {props.data.high}</Text>
                    <Text style={styles.text}>Baixa do dia: {props.data.low}</Text>
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