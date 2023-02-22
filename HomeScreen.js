import {View, StyleSheet, FlatList, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useEffect, useState } from 'react';

export default function HomeScreen ({ navigation }) {
   
    const [data,setData] = useState([]);

    //fetching movies at startup
   useEffect(() => {
    console.log(process.env);
    getMovies();
   }, []);

   //function to get movies with the API, had to use my own api code in url because env not working
   function getMovies() {
    fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=c1bf0fab3312e1b72805b4c13373736c`
    )
    .then((response) => response.json())
    .then((data) => setData(data.results));
   }


    const render = ({item}) => (
    <Item navigation={navigation} movieId={item.id} title={item.title} />
    );

    //return a list of the movies and a header welcoming 
    return (
    <View style={styles.container}>
        <FlatList data={data} renderItem={render} keyExtractor={(item) => item.id} />
    </View>
    )
}

//make items in list clickable 
const Item = ({ navigation, title, movieId }) => (
    <View style={styles.object}>
      <Text
        onPress={() =>
          navigation.navigate('MovieScreen', {
            movieId,
          })
        }
        style={styles.title}
      >
        {title}
      </Text>
    </View>
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    object: {
        backgroundColor: "#A934DC",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    header: {
        fontSize: 40,
        color: "#000000",
        fontWeight: "bold",

    },
    title: {
        fontSize: 32,
    },
});