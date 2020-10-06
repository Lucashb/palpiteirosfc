import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Alert, KeyboardAvoidingView, Image, TextInput} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

//Importações Internas
import api from '../../services/apiTeste';


export default function Teste(){
    const [teste, setTeste] = useState();
    
    const getDados = async () => {
      try {
        const response = await api.get('/atletas/mercado/teste');
        
        setTeste(response.data);
        console.log(response.data);
        
      } catch (response){
        Alert.alert('Deu Ruim !!!');
      }
    };

    useEffect(() => {
        getDados();

    }, [1]);

    function Lista ( {nomeLista} ){
        return(
            <KeyboardAvoidingView>
                <View >
                    
                    
                    <Text>{nomeLista.nome}</Text>
                  
                </View>
            </KeyboardAvoidingView>
        );
    }
    
    return(

        <KeyboardAvoidingView>

            <FlatList
               
                data={teste}
                keyExtractor={ (item) => item.id.toString() }
                renderItem={({item}) => <Lista nomeLista={item}/>}
            />

        </KeyboardAvoidingView>
    );
}
