import { View,TouchableOpacity,Button,StyleSheet,Text, ImageBackground,} from "react-native";
import { useState,useCallback,useEffect } from "react";
import { SafeArea } from "../components/SafeArea";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {Pacifico_400Regular} from '@expo-google-fonts/pacifico';
import { Theme } from "../utils/Theme";


export function About ({navigation}) {
    const [appIsReady, setAppIsReady] = useState(false);

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
      return null;
    }
    return (
        <SafeArea>
            <View style={styles.color}>
            <View style={styles.com}>
                <Text style={styles.title}>Charity App</Text>
                <Text style={styles.course}>Donate to a worthy course</Text>
                <View style={styles.border}>
                    <Text style={styles.text}>
                      The Charity App
                      Foundation's mission-unchanged 
                      since 1913. is to promote the wellbeing 
                      of humanity throughout the world.
                      Today the Foundation 
                      advances new frontiers of 
                      science, data, policy, and 
                      innovation to solve global 
                      challenges related to health, food, power, and 
                      economic mobility
                    </Text>
                    
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
                  <View style={styles.donationBox}>
                    <Text style={styles.text}>
                      Make A Donation
                    </Text>
                  </View>
                </TouchableOpacity>
            
            </View>
           
            </View>
        </SafeArea>
  );

}

const styles = StyleSheet.create({
    color:{
        flex:1,
        //backgroundColor:(Theme.colors.purple100)
    },

    com:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },

    title:{
        fontSize:35,
        fontFamily:'Pacifico_400Regular'
    },
    
    course:{
        marginTop:15,
        fontSize:20
    },

    border:{
        borderWidth:0.2,
        borderRadius:8,
        marginTop:10,
        backgroundColor:'blue',
        padding:30,
        margin:50
    },

    text:{
        fontSize:20,
        color:'white'
    },

    donationBox:{
      backgroundColor:Theme.colors.purple900,
      paddingHorizontal:15,
      paddingVertical:15,
      borderRadius:5,
      marginBottom:3,
      marginTop:15,
      justifyContent:'center'
    }
})