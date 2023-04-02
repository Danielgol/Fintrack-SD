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
                    <Text style={styles.textTopic}>De:  <Text style={styles.text}>{props.data.name.split('/')[0]} ({props.data.code})</Text></Text>
                    <Text style={styles.textTopic}>Para:  <Text style={styles.text}>{props.data.name.split('/')[1]} ({props.data.codein})</Text></Text>
                    <Text style={styles.textTopic}>Valor:  <Text style={styles.text}>{props.data.bid} ({props.data.pctChange}%)</Text></Text>
                    <Text style={styles.textTopic}>Variação:  <Text style={styles.text}>{props.data.varBid}</Text></Text>
                    <Text style={styles.textTopic}>Pico do dia:  <Text style={styles.text}>{props.data.high}</Text></Text>
                    <Text style={styles.textTopic}>Baixa do dia:  <Text style={styles.text}>{props.data.low}</Text></Text>
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
    textTopic:{
        fontFamily:'Jost-SemiBold',
        fontSize:21,
        marginHorizontal:20,
        marginVertical:15,
        color: '#fff',
    },
    text:{
        fontFamily:'Jost-Regular',
        fontSize:18,
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