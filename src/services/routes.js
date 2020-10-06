import React from 'react';
import { createAppContainer, createSwitchNavigator, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../pages/Main';
import Home from '../pages/Home';
import Atletas from '../pages/Atletas';
import Teste from "../pages/Teste";

import { NONE } from 'apisauce';

const Stack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: NONE
                }}
            />
            <Stack.Screen 
                name="Main" 
                component={Main}
                options={{
                    headerShown: NONE
                }}
            />
            <Stack.Screen 
                name="Atletas" 
                component={Atletas}
                options={{
                    headerShown: NONE
                }}
            />
            <Stack.Screen 
                name="Teste" 
                component={Teste}
                options={{
                    headerShown: NONE
                }}
            />
            </Stack.Navigator>
        </NavigationContainer>
    );
}