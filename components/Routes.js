import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import Page from './Page'
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown: false}} name="Page" component={Page}/>
    </Stack.Navigator>
  );
}