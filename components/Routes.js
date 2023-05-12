import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import SignInPage from './SignInPage';
import SignUpPage from './SingUpPage';
import ChangePassword from './ChangePassword';
import Create from './Create';
import Save from './Save';
import Feed from './Feed';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Create" component={Create}/>
      <Stack.Screen options={{headerShown: false}} name="Feed" component={Feed}/>
      <Stack.Screen options={{headerShown: false}} name="SignInPage" component={SignInPage} />
      <Stack.Screen options={{headerShown: false}} name="SignUpPage" component={SignUpPage}/>
      <Stack.Screen options={{headerShown: false}} name="ChangePassword" component={ChangePassword}/>
      <Stack.Screen options={{headerShown: false}} name="Save" component={Save}/>
    </Stack.Navigator>
  );
}