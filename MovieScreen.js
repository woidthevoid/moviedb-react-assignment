import { useEffect, useState } from "react"
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

export default function MovieScreen ({route}) {
   
    const [data,setData] = useState({});

    const {movieId} = route.params;

    //getting data about a particular movie 
    useEffect(() => {fetchMovieDetails();},
    []);

    //function used in useEffect
    function fetchMovieDetails () {
        fetch (
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=c1bf0fab3312e1b72805b4c13373736c`
        )
        .then((response) => response.json())
        .then((data) => setData(data));
    }

    // a view with movie details and its poster is shown 
    return (
        <View style={styles.container}>
           <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,
           }}/>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.overview}>{data.overview}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        height: "75%",
        width: "100%",
        paddingBottom: 30,
    },
    title: {
        marginBottom: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    overview: {
        fontSize: 15,
        textAlign: 'center',
    }
});