import { useContext, } from "react";
import { AppContext } from "../sittings/globalVariables";
import { StyleSheet } from "react-native";
import { SafeArea } from "../components/SafeArea";
import { Theme } from "../utils/Theme";
import { Button } from "react-native-paper";



export function Profile ({navigation}) {
    const {uid} = useContext(AppContext);
    console.log(uid);
    return (
        <SafeArea>
            <Button onPress={() => navigation.navigate('Create Profile')}> Create Profile</Button>

        </SafeArea>
    )
}

const styles=StyleSheet.create({
    title:{
        color:Theme.colors.brown300,
        fontSize:Theme.sizes[4]
    }
})

