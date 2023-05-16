import { React,useState,useEffect,useCallback } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,SafeAreaView,Button,StatusBar} from 'react-native';
import { TextInput } from 'react-native-paper';
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';








export function Login () {
    const [appIsReady, setAppIsReady] =  useState(false);
  
    useEffect(() => {
      async function prepare() {
        try {
          // Pre-load fonts, make any API calls you need to do here
          await Font.loadAsync({Pacifico_400Regular});
          // Artificially delay for two seconds to simulate a slow loading
          // experience. Please remove this if you copy and paste the code!
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (e) {
          console.warn(e);
        } finally {
          // Tell the application to render
          setAppIsReady(true);
        }
      }
  
      prepare();
    }, []);
  
    const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
        // This tells the splash screen to hide immediately! If we call this after
        // `setAppIsReady`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
        await SplashScreen.hideAsync();
      }
    }, [appIsReady]);
  
    if (!appIsReady) {
      null;
    }
     [text,setText ]=useState("")
     
     
     return(
        <SafeAreaView style={styles.container}>
            <View style={styles.up}>
                <View>
                    <Text style={{fontSize:50,fontFamily:'pacifico_400Regular',}}>
                        charityApp
                    </Text>
                </View>
                

                <View style={StyleSheet.middleup}>
                    <Text>
                        Login to your charityApp account
                    </Text>
                </View>
        </View>
                <View style={styles.Email}>
                <TextInput
                 label="Email"
                 value={text}
                 mode='outlined'
                 onChangeText={text => setText(text)}/>
                 </View>

                <View style={styles.password}>
                 <TextInput
                   label="password"
                   value={text}
                   mode='outlined'
                   onChangeText={text => setText(text)}/>
                </View>


                <TouchableOpacity>
                    <View style={styles.buttonbox}>
                        <View style={styles.textbox}>
                            <Text style={{color:'white'}}>LOGIN</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.last}>
                    <View>
                    <Text style={{fontSize:10,fontWeight:'bold'}}>
                        DON'T HAVE AN ACCOUNT?
                    </Text>
                    </View>
                
        <TouchableOpacity>
                <View style={{fontsize:10,fontWeight:'bold'}}>
                  <Text>SIGN IN</Text>
                </View>
        </TouchableOpacity>
            </View>
        </SafeAreaView>
     )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
    },
    up:{
        paddingTop:15,
        alignItems:'center',
        justifyContent:'center'
    },
    middleup:{
        paddingTop:2,
        paddingBottom:20,
        alignItems:'center'
    },
    buttonbox:{
        borderRadius:9,
        backgroundColor:'purple',
        marginBottom:5,
        padding:15,
        marginTop:15,
        marginLeft:40,
        marginRight:40,
        paddingTop:20
    },
    textbox:{
        alignItems:'center'
    },
    last:{
        flexDirection:'row',
        paddingLeft:45,
        paddingTop:5
    },
    Email:{
        paddingLeft:40,
        paddingRight:40,
        paddingBottom:20,
        borderRadius:9
    },
    password:{
        paddingLeft:40,
        paddingRight:40,
        borderRadius:9,
    }
})


   



