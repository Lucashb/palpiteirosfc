import React, { useState, useEffect, Component } from 'react';
import firebase from 'react-native-firebase';
import { NavigationContainer } from '@react-navigation/native';

import {
  Text,
  KeyboardAvoidingView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Keyboard,
  NativeEventEmitter,
  Alert,
  Button
} from 'react-native';

//Importações Internas
import api from '../../services/api';

export default function Main({ navigation }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [atletas, setAtletas] = useState([]);

  const login = async () => {

    try {
      
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      const usuarioLogado = firebase.auth().currentUser;

      if (usuarioLogado != null) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Dados incorretos');
      }
    } catch (err){
      console.log(err);
    }
  };

  const criarConta = async () => {

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

    var errorCode = error.code;
    var errorMessage = error.message;
    });
  };

    return(

      <KeyboardAvoidingView style={styles.background}>
          
          <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCorrect={false}
          value = {email}
          onChangeText={email => setEmail( email )}
          />

          <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          value = {password}
          onChangeText={password => setPassword( password )}
          />

        <TouchableOpacity style={styles.btnAcessar}>
          <Text style={styles.textoBtnAcessar} onPress={login}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCriarConta}>
          <Text style={styles.textobtnCriarConta} onPress={criarConta}>Criar conta gratuita</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151515'
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center'
  },
  containerTexto:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 33
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 10,
    color: '#222',
    fontSize: 15,
    borderRadius: 7,
    padding: 7
  },
  btnAcessar:{
    backgroundColor: '#f0f042',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    height: 40
  },
  textoBtnAcessar:{
    color: '#000',
    fontSize: 17
  },
  btnCriarConta:{
    marginTop: 10,
  },
  textobtnCriarConta:{
    color: '#f0f042'
  }

});
