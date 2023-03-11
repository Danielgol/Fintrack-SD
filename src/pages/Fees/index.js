import * as React from 'react';
import {StyleSheet, Text, View , TouchableOpacity, Dimensions, TextInput} from 'react-native';
import LargeButton from '../../components/Modal/LargeModal';
import Icon from 'react-native-vector-icons/Ionicons';
import TextModal from '../../components/Modal/TextModal';


const { width, height } = Dimensions.get("screen");

export default function Fees() {

  const [taxa, setTaxa] = React.useState('');

  const handleTextChange = (taxa) => {
    setTaxa(taxa);
    console.log(taxa);
  };

  return (
    <View style={styles.calculator}>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>
            Taxa de Juros:
          </Text>
          <TextInput
            style={styles.input}
            //autoFocus={true}
            keyboardType='numeric'
            placeholder="Digite a taxa de juros"
            onChangeText={handleTextChange}
            //value={String(props.auxValue)}
          />
        </View>
        <View>
          <Text style={styles.label}>
              Valor inicial:
          </Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder="Digite o valor inicial"
            //onChangeText={(text) => handleEditChange(text, props) }
            //value={String(props.auxValue)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculator: {
    backgroundColor: '#444850',
    height: '100%'
  },
  container:{
    marginHorizontal: '20%',
    height: '100%',
    paddingTop: 20,
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
  }
});
