import { createStackNavigator } from "@react-navigation/stack";
import { MyHome } from "./Home";
import { Login } from "./Login";
import { About } from './About';
import { Donate} from "./Donate";
import { Signup } from './Signup';


const Stack = createStackNavigator();

export function StackNavigation () {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stack.Screen name='My Home' component={MyHome}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='Donate' component={Donate} />
            <Stack.Screen name='Signup' component={Signup} options={{headerShown:true}} />
        </Stack.Navigator>
    )
}