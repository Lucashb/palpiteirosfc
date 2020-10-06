import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//Importações Internas
import Atletas from '../Atletas';
import Teste from '../Teste';

export default function Listas({ navigation }){
    
    const chamarAtletas = async () => {
        navigation.navigate('Atletas');
    };
    
    const chamarTesteServico = async () => {
        navigation.navigate('Teste');
    };

    return(
        
        <KeyboardAvoidingView style={styles.background}>
        <TouchableOpacity style={styles.btnAtletas} onPress={chamarAtletas}>
            <Text style={styles.textobtnAtletas}>Atletas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnAtletas} onPress={chamarTesteServico}>
            <Text style={styles.textobtnAtletas}>Teste Serviço</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnAtletas} onPress={() => {}}>
            <Text style={styles.textobtnAtletas}>Em Construção</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnAtletas} onPress={() => {}}>
            <Text style={styles.textobtnAtletas}>Em Construção</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnAtletas} onPress={() => {}}>
            <Text style={styles.textobtnAtletas}>Em Construção</Text>
        </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        width: '100%'
      },
      btnAtletas:{
        backgroundColor: '#151515',
        width: '95%',
        marginBottom: 5,
        borderRadius: 7,
        padding: 30
      },
      textobtnAtletas:{
        color: '#FFF',
        fontSize: 20
      },
});
