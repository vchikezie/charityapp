import { useContext, useEffect, useState } from "react";
import { AppContext } from "../sittings/globalVariables";
import { StyleSheet,SafeAreaView,Image,View,Text,ScrollView} from "react-native";
import { SafeArea } from "../components/SafeArea";
import { Theme } from "../utils/Theme";
import { Button } from "react-native-paper";
import {db }  from "../settings/FireBase.setting"
import { getDoc,doc } from "firebase/firestore";



export function Profile ({navigation}) {
    const { uid} = useContext(AppContext);
    const [userRecords,setUserRecords] = useState({})

    //fetch dATA AFTER COMPONENT IS LOADED
    //console.log(uid);
    useEffect(() => {
        const handleGetUserRecords = async () => {
            const snapShot = await getDoc (doc(db,'users',uid))
            setUserRecords(snapShot.data())
        }
        handleGetUserRecords();
    },[])
    //console.log(userRecords);//delete after testing
    return (
       <View style={styles.container}>
       
       
            <Image
            style={styles.headerImage}
            source={{uri:'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>   
         
         <View style={styles.body}>
            <ScrollView>
            <View style={styles.contentbox}>
               <View style={{paddingLeft:9}}>
               <Text style={{fontWeight:'bold'}}>Name :</Text>
               <Text style={{fontWeight:'bold',fontSize:28}}>{userRecords.firstName} {userRecords.lastName}</Text> 
               </View>
            </View>

            <View style={styles.contentbox}>
               <View style={{paddingLeft:9}}>
               <Text style={{fontWeight:'bold'}}>Date Of Birth :</Text>
               <Text style={{fontWeight:'bold',fontSize:28}}>{userRecords.dateOfBirth}</Text>
               </View>
            </View>

            <View style={styles.contentbox}>
               <View style={{paddingLeft:9}}>
               <Text style={{fontWeight:'bold'}}>City :</Text>
               <Text style={{fontWeight:'bold',fontSize:28}}>{userRecords.city}</Text>
               </View>
            </View>

            <View style={styles.contentbox}>
               <View style={{paddingLeft:9}}>
               <Text style={{fontWeight:'bold'}}>Bio :</Text>
               <Text style={{fontWeight:'bold',fontSize:28}}>{userRecords.bioInfo}</Text>
               </View>
            </View>

            <View style={{marginHorizontal:12}}>
               <Button
               contentStyle={{paddingVertical:16}}
               style={{borderRadius:6}} 
               textColor="white"
               buttonColor={Theme.colors.gray200}
               onPress={() => navigation.navigate('Update Profile')}>
                  Update profile
               </Button>
         </View>
            </ScrollView>
         </View>
            
         

            

       </View>
    )
}

const styles=StyleSheet.create({
   container:{
      flex:1,
     // backgroundColor:Theme.colors.lime300,
   },
   headerImage:{
   flex:2,
      height:'100%',
      width:'300%',
      resizeMode:'contain',
      alignSelf:'center',
   },
   body:{
      flex:4,
      paddingBottom:28.
   },
   contentbox:{
      backgroundColor:'white',
      marginHorizontal:12,
      marginBottom:12,
      borderRadius:8,
      padding:25,
      borderWidth:1,
      borderColor:Theme.colors.gray100,
      marginTop:10,
   }
})

