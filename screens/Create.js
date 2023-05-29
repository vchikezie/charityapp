import { AppContext } from "../sittings/globalVariables";
import { useContext } from "react";
import { View,Text,StyleSheet } from "react-native";
import {SafeArea } from "../components/SafeArea";
import { Button,TextInput } from "react-native-paper";


export function Create({navigation}) {
    const {uid} = useContext(AppContext);
    
    return uid !== null ? (
        <SafeArea>
            <Text style={styles.mainTitle}>create a Fund Raiser</Text>
            <Text style={styles.crimeAlert}>This app is a demonstratiom app built by a cohort 
            of student and instrctor at earlycode. This app must not be used by any means for 
            frudulent purpose. The students and the institutions takes no 
            responsible for any act of crime on the app</Text>
        </SafeArea>
    )
    :(
        <SafeArea>
            <View style={styles.wrapper}>
            <Text style={styles.subHeader2}>sign in first to create a Fund Raiser</Text>
            <Button mode="contained" 
            contentStyle={{paddingVertical:4}}onPress={() => navigation.navigate('Login')}>go to login</Button>
            </View>
        </SafeArea>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:16
    },
    subHeader2:{
        fontSize:24,
        textAlign:'center'
        
    },
    mainTitle:{
        fontSize:26,
        marginBottom:6
    },
    crimeAlert:{
        fontSize:12,
        color:'gray',
        marginBottom:8
    }
})