import { useContext,useEffect, useState } from "react";
import { View,StyleSheet } from "react-native";
import { AppContext } from "../sittings/globalVariables";
import { SafeArea } from "../components/SafeArea";
import { Theme } from "../utils/Theme";
import { Button } from "react-native-paper";
import { db } from "../sittings/FireBase.sitting";
import { getDoc,doc } from "firebase/firestore";

export function Profile ({navigation}) {
    const {uid} = useContext(AppContext);
    //update usestate after data is fetched
    const [userRecords,setUserRecords] = useState({});

    console.log(uid);

    //fetch data after component is loaded
    useEffect(() => {
        const handleGetUserRecords = async () => {
            const snapShot = await getDoc(doc(db,'users',uid));

            setUserRecords(snapShot.data());
        }
        handleGetUserRecords();

    }, []);
   // console.log(userRecords);//delete after testing

    
    return (
        <SafeArea>
            <View >

            </View>
        </SafeArea>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Theme.colors.lime100,
    }
  
})

