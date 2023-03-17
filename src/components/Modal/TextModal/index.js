import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Linking} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function TextModal(props) {
    const navigation = useNavigation();

    function handleBtn(){
      if(props.link != null){
        return Linking.openURL(props.link)
      }else if(props.navigate){
        return navigation.navigate(props.navigate)
      }
    }
    return(
      <View style={styles.cardColumn}>
        {
          props.image ?
          <TouchableOpacity style={styles.btn} onPress={() => handleBtn()}>
              <Image style={styles.cardImage} source={props.image}></Image>
              <Text style={styles.textTitleImage}>{props.title}</Text>
              <Text style={styles.text}>{props.text}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => handleBtn()}>
              <Text style={styles.textTitle}>{props.title}</Text>
              <Text style={styles.text}>{props.text}</Text>
          </TouchableOpacity>
        }
      </View>
    )
}

const styles = StyleSheet.create({
  textTitle:{
    color:'white',
    fontSize:25,
    marginTop:'10%',
    marginBottom: '5%',
    fontFamily:'Jost-Bold',
    textAlign: 'center',
  },
  textTitleImage:{
    color:'white',
    fontSize:25,
    marginBottom: '5%',
    fontFamily:'Jost-Bold',
    textAlign: 'center',
  },
  btn:{
    alignItems: 'center',
  },
  text:{
    color:'white',
    textAlign: 'center',
    marginHorizontal: '10%',
    fontFamily:'Jost-Medium',
    marginBottom:'10%'
  },
  cardColumn:{
    backgroundColor: '#6A5ACD', 
    borderColor:'#7765e6',
    borderWidth:1, 
    marginVertical:'10%',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 8,
  },
  cardImage:{
    width: 150,
    height: 150,
  }
  });