import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Listas from '../Listas';

function HomeScreen() {
	return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.container}>
                <Text>Home!</Text>
            </View>
        </KeyboardAvoidingView>
	);
}

function ListScreen(props) {
	return (

        <KeyboardAvoidingView style={styles.background}>
            <Listas navigation = {props.navigation}/>
        </KeyboardAvoidingView>

	);
}

function PostScreen() {
	return (
		<View style={styles.container}>
			<Text>New Post!</Text>
		</View>
	);
}

function NotificationsScreen() {
	return (
		<View style={styles.container}>
			<Text>Notifications!</Text>
		</View>
	);
}

function SettingsScreen() {
	return (
		<View style={styles.container}>
			<Text>Settings!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	return (
			<Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
        
                    switch (route.name) {
                        case ' ':
                            iconName = 'home';
                            break;
                        case '  ':
                            iconName = 'list';
                            break;
                        case '   ':
                            iconName = 'edit';
                            break;
                        case '    ':
                            iconName = 'bell';
                            break;
                        case '     ':
                            iconName = 'settings';
                            break;
                        default:
                            iconName = 'circle';
                            break;
                    }
        
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
                tabBarOptions={{
                activeTintColor: '#FFF',
                inactiveTintColor: '#FFF',
                activeBackgroundColor: '#000',
                inactiveBackgroundColor: '#151515',
            }}
        >
				<Tab.Screen name=" " component={HomeScreen} />
				<Tab.Screen name="  " component={ListScreen} />
				<Tab.Screen name="   " component={PostScreen} />
				<Tab.Screen name="    " component={NotificationsScreen} />
				<Tab.Screen name="     " component={SettingsScreen} />
			</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
        left: 1,
        justifyContent: "center",
		alignContent: "center"
    },
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
});

