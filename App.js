import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';
import MovieScreen from './MovieScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Home'}} />
        <Stack.Screen name='MovieScreen' component={MovieScreen} options={{title: 'About the movie'}}/>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{title: 'Welcome!'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}