import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Alert, KeyboardAvoidingView, Image, TextInput} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

//Importações Internas
import api from '../../services/api';


export default function Atletas(){
    const [atletas, setAtletas] = useState();

    const getDados = async () => {
        try {
          
          const response = await api.get('/atletas/mercado');
          console.log(response.data);
          const { atletas } = response.data;
          
          setAtletas(atletas);
          
        } catch (response){
          Alert.alert('Deu Ruim !!!');
        }
    };

    function Lista ( {nomeLista} ){
        return(
            <KeyboardAvoidingView style={styles.backgroundLista}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.Atletas}>
                        <Image 
                            source={{ uri: nomeLista.foto ? nomeLista.foto.replace('FORMATO','140x140') : null}}
                            style={styles.avatar}
                        />
                        <Text style={styles.textoAtletas}>{nomeLista.apelido}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }

    useEffect(() => {
        getDados();
    }, [1]);
    
    return(

        <KeyboardAvoidingView style={styles.backgroundLista}>
            
            <View style={styles.containerBuscaAtletas}>
                <TextInput
                    placeholder="Buscar Jogador"
                    autoCorrect={false}
                />
                <TouchableOpacity>
                    <Text style={styles.textoBuscarAtletas}>></Text>
                </TouchableOpacity>               
            </View>

            <FlatList
               
                data={atletas}
                keyExtractor={ (item) => item.atleta_id.toString()}
                renderItem={({item}) => <Lista nomeLista={item}/>}
            />

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    backgroundLista:{
        backgroundColor: '#000'
    },
	container: {
		flex: 1,
		alignItems: 'center'
    },
    containerBuscaAtletas: {
        backgroundColor: '#151515',
        width: '95%',
        fontSize: 15,
        padding: 10,
        borderRadius: 7,
        marginTop: 5,
        marginLeft: 10,
        flexDirection: "row"
    },
    Atletas:{
        backgroundColor: '#151515',
        width: '95%',
        marginBottom: 6,
        borderRadius: 7,
        padding: 15
      },
    textoAtletas:{
        color: '#FFF',
        fontSize: 20,
        paddingLeft: 120,
        textAlign: "left",
        top: -105
    },
    avatar:{
        width: 100,
        height:100,
        padding: 0,
        top: 20
    },
    textoBuscarAtletas:{
        color: '#FFF',
        fontSize: 40,
        textAlign: "right"
    }
});
