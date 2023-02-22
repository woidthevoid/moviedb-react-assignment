import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet,View, Button, Text } from "react-native";
export default function WelcomeScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to MyMovieSearch!</Text>
            <Button title="Go to Most Popular Movies" onPress={() => navigation.navigate('Home')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        paddingBottom: 15,
    },
    description: {
        paddingBottom: 30,
    },

})