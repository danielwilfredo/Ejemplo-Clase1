import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, Alert} from 'react-native';
import Input from './src/components/Input'
import Button from './src/components/Button'
import { useState } from 'react';

export default function App() {

  //state de la app
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado]=useState(0)

  const sumar = ()=>{
    let suma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(suma)
    //Alert.alert("El resultado de la suma es: " + suma)
  }

  const reset = ()=>{
    setResultado(0);
    setNumero1(0)
    setNumero2(0)
  }

  return (
    <View style={styles.container}>
      <Text>App para sumar </Text>
      <Input
      title_placeholder={'Ingrese numero 1: '}
      numero={numero1}
      setNumero={setNumero1}
      />
            <Input
      title_placeholder={'Ingrese numero 2: '}
      numero={numero2}
      setNumero={setNumero2}
      />

      <Button
      title_button={'Sumar'}
      action_button={sumar}/>

    <Text>Resuldato de la suma es: {resultado}</Text>

    <Button

      title_button={'Restablecer'}
      action_button={sumar}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input:{
    backgroundColor: 'lightgrey', 
    width:150, 
    padding:15,
    color:'black', 
    margin:10
  }
});
