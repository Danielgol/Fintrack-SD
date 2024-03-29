import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CoinModal(props) {

    const [bid, setBid] = useState('');
    const [name, setName] = useState('');
    const [data, setData] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        axios.get(`https://economia.awesomeapi.com.br/json/${props.selectedCoin}-${props.coin}`)
        .then(response => {
          setBid(response.data[0]['bid']);
          setName(response.data[0]['name'].split('/')[1])
          setData(response.data[0])
        })
        .catch(error => {
          setBid(null);
        });
    },[props.selectedCoin])
    function Modal() {
        if (bid) {
          return  <TouchableOpacity  onPress={() => navigation.navigate('Detalhes', {type:'coin', data:data})}>
                    <View style={styles.selectCoin}> 
                      <Text style={styles.text}>{name}({props.coin})</Text>
                      <Text style={styles.text}>{bid}</Text>     
                    </View>
                  </TouchableOpacity>  
        }
        return null;
      }
    return(
        <Modal/>
    )
}

const styles = StyleSheet.create({
    selectCoin:{
      marginHorizontal: 30,
      marginVertical:7,
      flexDirection: 'row',
      justifyContent:'space-between',
      backgroundColor: '#6A5ACD', 
      padding: 5, 
      borderColor:'black', 
      borderWidth:1, 
      alignItems:'center',
      borderRadius: 5
    },
    text: {
      fontFamily:'Jost-Medium',
      fontSize:16,
      marginHorizontal:5,
      color: '#fff'
    }
  
  });