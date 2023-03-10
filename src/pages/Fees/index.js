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
        <View style={[styles.row]}>
          <TextInput
            top={30}
            //autoFocus={true}
            borderRadius={8}
            padding={10}
            fontSize={20}
            width={210}
            elevation={4}
            backgroundColor='#808080'
            keyboardType='numeric'
            placeholder="Digite a taxa de juros."
            onChangeText={handleTextChange}
            //value={String(props.auxValue)}
          />
        </View>
        <View style={[styles.row]}>
          <TextInput
            top={50}
            borderRadius={8}
            padding={10}
            fontSize={20}
            width={210}
            elevation={4}
            backgroundColor='#808080'
            keyboardType='numeric'
            placeholder="Digite o valor inicial."
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
    backgroundColor: 'rgba(34,36,40,1)',
    height: '100%'
  },
  container:{
    marginHorizontal: '20%',
    height: '100%'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
