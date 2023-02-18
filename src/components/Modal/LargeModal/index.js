import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function LargeButton(props) {
    const navigation = useNavigation();
    return(
    <View style={{borderRadius:15, marginVertical:10}}> 
            <TouchableOpacity style={[styles.cardColumn]} onPress={() => navigation.navigate(props.navigate)}>
                <Text style={styles.text}>{props.text}</Text>  
                
                <View style={{backgroundColor: props.bgColor, borderRadius:40, padding: 8}}>
                  <Icon name={props.icon} size={40} color="black"/>
                </View>
            </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    cardColumn: {
        width: '100%',
        height: 165,
        borderRadius:15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#7765e6'
      },
      text:{
        fontSize:22,
        fontFamily:'Jost-SemiBold',
        width:'60%',
        color: "white"
      },
  
  });