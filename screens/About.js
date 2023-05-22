import { useState,useCallback,useEffect } from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import { SafeArea } from "../components/SafeArea";
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font';
import {Pacifico_400Regular} from "@expo-google-fonts/pacifico";
import { Theme } from "../utils/Theme";
import { text } from "@fortawesome/fontawesome-svg-core";

export function About ({navigation}) {
  const [appIsReady, setAppIsReady] = useState(false);

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
    return (
        <SafeArea>
          <View style={styles.box}>


            <View>
              <Text style={styles.header2}>
                charityApp
              </Text>
              </View>

              <View style={styles.center}>
                <Text>
                  Donate to a worthy course 
                </Text>
              </View>
              <View style={styles.header}>
                <View style={styles.note}>
                  <Text style={styles.text}>The charity App</Text>
                  <Text style={styles.text}>Foundation's mission--</Text>
                  <Text style={styles.text}> unchange since 1913--</Text>
                  <Text style={styles.text}>is to promote the well</Text>
                  <Text style={styles.text}>being of humanity</Text>
                  <Text style={styles.text}>throughtout the world</Text>
                  <Text style={styles.text}>today the foundation</Text>
                  <Text style={styles.text}> advances nre frontier's</Text>
                  <Text style={styles.text}>of science,data,policy</Text>
                  <Text style={styles.text}>and innovation to solve</Text>
                  <Text style={styles.text}>global challenges related</Text>
                  <Text style={styles.text}>to health,food,power</Text>
                  <Text style={styles.text}>and economic mobility</Text>
                </View>
              </View>
                    <TouchableOpacity on onPress={()=>navigation.navigate('Donate')}>
                      <View style={styles.makebox}>
                        <Text style={styles.text}>Make a Donation</Text>
                      </View>
                       </TouchableOpacity>
                      </View>  
        </SafeArea>

        
    )
}

const styles = StyleSheet.create({
  box:{
    backgroundColor:Theme.colors.purple100,
    alignItems:'center',
    marginTop:'50%',
    paddingTop:10,
    paddingBottom:50,
    marginLeft:50,
    marginRight:50,
  },
  headers:{
    backgroundColor:Theme.colors.purple900,
    borderRadius:5,
    paddingLeft:10,
    paddingRight:5,
    paddingBottom:20
  },
  header2:{
    fontFamily:'Pacifico_400Regular',
    color:'black',
    fontSize:Theme.sizes[3],
    
  },
  header:{
    alignItems:'center',
  },
  note:{
    marginTop:10,
    backgroundColor:Theme.colors.purple900,
    paddingHorizontal:10,
    paddingVertical:15,
    borderRadius:5,
    marginBottom:3,
    marginTop:5
  },
  makebox:{
    backgroundColor:Theme.colors.purple900,
    paddingHorizontal:35,
    paddingVertical:15,
    borderRadius:5,
    marginBottom:3,
    marginTop:15
  },
  text:{
    color:'white'
  },
  center:{
    marginBottom:15
  }
})