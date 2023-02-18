import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function TextModal(props) {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.cardColumn}> 
            <Text style={styles.textTitle}>{props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
  textTitle:{
    color:'white',
    fontSize:25,
    marginTop: '10%',
    marginBottom: '5%',
    fontFamily:'Jost-Bold',
  },
  text:{
    color:'white',
    textAlign: 'justify',
    marginHorizontal: '10%',
    fontFamily:'Jost-Medium',
    marginBottom:'10%'
  },
  cardColumn:{
    backgroundColor: 'rgba(34,36,40,1)', 
    borderColor:'#7765e6',
    borderWidth:1, 
    marginVertical:'10%',
    flexDirection: 'column',
    alignItems: 'center',
  }
  });