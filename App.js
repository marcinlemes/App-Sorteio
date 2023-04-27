import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';

export default function App() {
  
  const [numero, setNumero] = useState(0);
  
  const [flagInputFocus, setFlagInputFocus] = useState('')

  const [valorMinimo, setValorMinimo] = useState(0)
  const [valorMaximo, setValorMaximo] = useState(10)

  
  const validarCampos = (minimo, maximo) => {
    if (isNaN(minimo) || isNaN(maximo)) {
      alert('Digite os valores');
      return false;
    }
    
    if (minimo > maximo) {
      alert('O minimo deve ser menor que o maximo');
      return false;
    }
    
    return true
  }
  
  const gerarNumero = () => {
    const min = parseInt(valorMinimo);
    const max = parseInt(valorMaximo);

    if (!validarCampos(min, max)){
      return;
    }

    const novoNumero = Math.floor(Math.random() * (max + 1 - min) + min);
    setNumero(novoNumero)
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  
  
  
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
        <Text style={styles.primeiroTexto}>Escolha o valor mínimo e o máximo para fazer o sorteio</Text>

        <View style={styles.areaInput}>
          <Text style={styles.label}>Valor Mínimo: </Text>
          <TextInput 
          style={flagInputFocus === 'txt_min' ? styles.inputFocus : styles.inputNormal} 
          textAlign='center'
          keyboardType= 'number-pad'
          maxLength = {5}
          autoFocus = {true}
          onFocus= {() => setFlagInputFocus('txt_min')}
          onBlur = {() => setFlagInputFocus('')}
          value={valorMinimo.toString()}
          onChangeText={valor => setValorMinimo(valor)}
          />
        </View>

        <View style={styles.areaInput}>
          <Text style={styles.label}>Valor Máximo: </Text>
          <TextInput 
          style={flagInputFocus === 'txt_max' ? styles.inputFocus : styles.inputNormal} 
          textAlign='center'
          keyboardType= 'number-pad'
          maxLength = {5}
          onFocus= {() => setFlagInputFocus('txt_max')}
          onBlur = {() => setFlagInputFocus('')}
          value={valorMaximo.toString()}
          onChangeText={valor => setValorMaximo(valor)}
          />
        </View>

        <View style={styles.areaBotao}>
          
          <Button title='Sortear' color='white' onPress={gerarNumero}/>
        
        </View>

        <View style={styles.bolaRedonda} >
          <Text style={styles.numeroPrincipal}>{numero}</Text>
        </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },

  primeiroTexto: {
    marginBottom: 50,
    fontSize: 20,
    textAlign: 'center',
    width: '85%'
  },

  areaInput: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center'
  },

  label: {
    fontSize: 18,
  },

  inputFocus: {
    borderWidth: 1,
    borderRadius: 3,
    width: 100,
    paddingHorizontal: 5,
    marginLeft: 10,
    borderColor: '#1f4f66',
    height: 25
  },

  inputNormal: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 3,
    width: 100,
    paddingHorizontal: 5,
    marginLeft: 10,
    height: 25
  },

  areaBotao: {
    backgroundColor: '#1f4f66',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 60,
    marginTop: 10,
  },

  bolaRedonda: {
    borderRadius: 900,
    backgroundColor: '#13afc5',
    padding: 50
  },

  numeroPrincipal: {
    fontSize: 90,
    color: 'white',
    textShadowRadius: 4,
  }

})