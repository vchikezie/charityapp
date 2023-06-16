import { View,TouchableOpacity,ActivityIndicator,Text,StyleSheet,Alert} from "react-native";
import { SafeArea } from "../components/SafeArea";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { useState,useEffect,useCallback,useContext } from "react";
import { AppContext } from "../sittings/globalVariables";
import { TextInput,Button } from 'react-native-paper';
import * as yup from 'yup';
import { Formik } from "formik";
import { auth } from "../sittings/FireBase.sitting";
import {signInWithEmailAndPassword,onAuthStateChanged}  from "firebase/auth"



const validationRules = yup.object({
  email:yup.string().required('you must fill this form').min(5).max(36),
  password:yup.string().required('Input your Password').min(4)


});

export function Login ({navigation}) {
    const {setUid} = useContext(AppContext)
    const [appIsReady, setAppIsReady] = useState(false);
    const [eventActivityIndicator,seteventActivityIndicator]= useState(false);
    
    useEffect(() => {

        async function prepare() {
          try {
            await Font.loadAsync({Pacifico_400Regular});
            await new Promise(resolve => setTimeout(resolve, 2000));
          } catch (e) {
            console.warn(e);
          } finally {
            setAppIsReady(true);
          }
        }
    
        prepare();
      }, []);
    
      const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          await SplashScreen.hideAsync();
        }
      }, [appIsReady]);
    
      if (!appIsReady) {
        return null;
      }
    

    return(
        <SafeArea>
            <View style={style.heding}>
                <Text style={style.title}>Charity App</Text>
                { eventActivityIndicator ? <ActivityIndicator size='small'/> :null}
                <Text style={style.title2}>Login to your Charity App account</Text>

                <Formik
                initialValues={{ email: '',password:'' }}
    onSubmit={(values,action) =>{
      seteventActivityIndicator(true);
      signInWithEmailAndPassword(auth,values.email,values.password)
        .then(() => onAuthStateChanged(auth,(user) => {setUid(user.uid)
        navigation.navigate('My Home')}))
          .catch(error => {
            if (error.code == 'auth/invalid-email') {
              Alert.alert(
                  'message',
                  'Invalid email/password',
                  [{text:'Try Again'}]
              )
          } else if (error.code == 'auth/wrong-password' || error.code == 'auth/user-not-found'){
          seteventActivityIndicator(false);
          Alert.alert(
              'message',
              'invalid email/password',
              [{text:'Try Again'}])
          }else {
            seteventActivityIndicator(false);
              Alert.alert(
                  'message',
                  'Something Went Wrong',
                  [{text:'Dismiss'}])
          }
          })    
      
    }}
    validationSchema={validationRules}
  >
    {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
      <View>

        <View>
            <TextInput
            label="Email"
            mode="outlined"
            Style={style.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            />
            {touched.email && errors.email ? 
            <Text style={{color:'red'}}>{errors.email}</Text>
            :null}
        </View>


        
        <View>
            <TextInput
            label='password'
            mode="outlined"
            style={style.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry={true}
            />
            {touched.password && errors.password ?
            <Text style={{color:'red'}}>
              {errors.password}</Text>:null}
        </View>
        
        <View style={style.button}>
          <Button
          textColor="black" 
          mode="contained"
          buttonColor="gray"
          onPress={handleSubmit}>
            Login
          </Button>
        </View>
      </View>
    )}
          </Formik>
                  <View style={style.account}>
                   

                    <Text >Don't have an account? </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Reset Password')}>
                      <Text style={{padding:10}}> Forgot password? </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                      <Text style={style.sign}>Sign up</Text>
                    </TouchableOpacity>
                    
                  </View>
              </View>
              
          </SafeArea>
    )
}

const style = StyleSheet.create({
    heding:{ 
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:280
        },
    title:{
        fontSize:35,
        fontFamily:'Pacifico_400Regular'
         },
    title2:{
        marginTop:15
    },
    input:{
        marginTop:15,
        width:300
    },
    button:{
      marginTop:20,
      width:300,
      height:70
    },
    account:{
      flexDirection:'row'
    },
    sign:{
      
      color:'blue'
    },
})