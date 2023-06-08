import { View,TouchableOpacity,ActivityIndicator,Text,StyleSheet,} from "react-native";
import { SafeArea } from "../components/SafeArea";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { useState,useEffect,useCallback } from "react";
import { TextInput,Button } from 'react-native-paper';
import * as yup from 'yup';
import { Formik } from "formik";
import { auth } from "../sittings/FireBase.sitting";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const validationRules = yup.object({
  email:yup.string().required('you must fill this field').min(5).max(36),
});




export function ForgotPassword ({navigation}) {
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
            <Text style={style.title2}>Reset Your Passwrod</Text>  
    <Formik
    initialValues={{ email: ''}}
    onSubmit={(values,action) =>{
      seteventActivityIndicator(true);

        // code for forgot password here
    
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


        <View style={style.button}>
          <Button 
          mode="contained"
          onPress={handleSubmit}>
            Forgot Password
          </Button>
        </View>

        
      </View>
    )}
  </Formik>
            <View style={style.account}>
                <Text >Remembered Your password? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={style.sign}>Go to sign</Text>
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


