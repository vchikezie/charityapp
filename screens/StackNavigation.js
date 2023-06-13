import { createStackNavigator } from "@react-navigation/stack";
import { MyHome } from "./Home";
import { Login } from "./Login"
import { About } from './About';
import { Donate} from "./Donate";
import { Signup } from './Signup';
import { FundRaiser } from "./FundRaiser";
import { Create } from "./Create";
import { ForgotPassword } from "./ForgotPassword";
import { CreateProfile } from "./CreateProfile";
import { Profile } from "./Profile";
import { UpdateProfile } from "./UpdateProfile";


const Stack = createStackNavigator();

export function StackNavigation () {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stack.Screen name='My Home' component={MyHome}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='Donate' component={Donate} />
            <Stack.Screen name='Signup' component={Signup} options={{headerShown:true}} />
            <Stack.Screen name='FundRaiser' component={FundRaiser} options={{headerShown:false}} />
            <Stack.Screen name='Create' component={Create} options={{headerShown:false}} />
            <Stack.Screen name='Reset Password' component={ForgotPassword} options={{headerShown:false}} />
            <Stack.Screen name='Create Profile' component={CreateProfile} options={{headerShown:false}} />
            <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}} />
            <Stack.Screen name='UpdateProfile' component={UpdateProfile} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}