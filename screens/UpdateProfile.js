import { useContext, useEffect, useState } from "react";
import { AppContext } from "../settings/globalVariables";
import { StyleSheet,Image,View,Text,ScrollView} from "react-native";
import { Theme } from "../utils/Theme";
import { Button,TextInput } from "react-native-paper";
import { Formik } from 'formik';
import * as yup from 'yup';
import { db } from "../settings/FireBase.setting";
import { getDoc,doc,updateDoc} from "firebase/firestore";
import { UseActivityIndicator } from "../components/ActivityIndicator";



const validationRules = yup.object({
    fName:yup.string().required('required field',),
    lName:yup.string().required('required field',),
    city:yup.string().required('required field',),
    mail:yup.string().required('required field',).min(16),
    dob:yup.string(),
    bio:yup.string(),
});


export function UpdateProfile ({navigation}) {
    const { uid} = useContext(AppContext);
    const [userRecords,setUserRecords] = useState({})
    const [modalVisible, setModalVisible] = useState(false);

    //fetch dATA AFTER COMPONENT IS LOADED
    //console.log(uid);
    useEffect(() => {
        const handleGetUserRecords = async () => {
            const snapShot = await getDoc (doc(db,'users',uid))
            setUserRecords({id:snapShot.id,data:snapShot.data()});
        }
        handleGetUserRecords();
    },[])

    const handleUpdateProfile = async (data) => {
        setModalVisible(true)// start activiyIndicator
         await updateDoc(doc(db,'users',userRecords.id),{
            firstName:data.fName,
            lastName:data.lName,
            city:data.city,
            mailingAddress:data.mail,
            bioInfo:data.bio,
         }).then(() => {
            setModalVisible(false)// start activiyIndicator
            navigation.navigate('Profile');
         })
         .catch(e =>{
            setModalVisible(false)// start activiyIndicator
         })
    }
    //console.log(userRecords);//delete after testing
    return (
       <View style={styles.container}>
        <UseActivityIndicator bool={modalVisible}/>
            <Image
            style={styles.headerImage}
            source={{uri:'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>   
         
         <View style={styles.body}>
            <ScrollView>
            <Formik
         initialValues={{fName:'',lName:'',mail:'',bio:'', }}    
          onSubmit={(values,action) => {
            handleUpdateProfile(values);
            
        }}
        validationSchema={validationRules}
        >
            {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
            <View style={styles.form}>

                <View style={styles.form}>
                    <TextInput
                        outlineColor="gray"
                        activeOutlineColor="#5D9C59"
                        label="first name"
                        mode="outlined"
                        onChangeText={handleChange('fName')}
                        onBlur={handleBlur('fName')}
                        value={values.fName}
                    />
                        {touched.fName && errors.fName ? 
                        <Text style={{color:'red'}}>{errors.fName}</Text>
                    :null}
                </View>

                <View>
                    <TextInput
                        outlineColor="gray"
                        activeOutlineColor="#5D9C59"
                        label="last name"
                        mode="outlined"
                        Style={styles.input}
                        onChangeText={handleChange('lName')}
                        onBlur={handleBlur('lName')}
                        value={values.lName}
                    />
                        {touched.lName && errors.lName ? 
                        <Text style={{color:'red'}}>{errors.lName}</Text>
                    :null}
                </View>

                <View>
                    <TextInput
                        outlineColor="gray"
                        activeOutlineColor="#5D9C59"
                        label=" current city"
                        mode="outlined"
                        Style={styles.input}
                        onChangeText={handleChange('city')}
                        onBlur={handleBlur('city')}
                        value={values.city}
                    />
                        {touched.city && errors.city ? 
                        <Text style={{color:'red'}}>{errors.city}</Text>
                    :null}
                </View>

                <View>
                    <TextInput
                        outlineColor="gray"
                        activeOutlineColor="#5D9C59"
                        label="mailing address"
                        mode="outlined"
                        Style={styles.input}
                        onChangeText={handleChange('mail')}
                        onBlur={handleBlur('mail')}
                        value={values.mail}
                    />
                        {touched.mail && errors.mail ? 
                        <Text style={{color:'red'}}>{errors.mail}</Text>
                    :null}
                </View>

                <View>
                    <TextInput
                        outlineColor="gray"
                        activeOutlineColor="#5D9C59"
                        label="bio"
                        mode="outlined"
                        Style={styles.input}
                        onChangeText={handleChange('bio')}
                        onBlur={handleBlur('bio')}
                        value={values.bio}
                    />
                        {touched.bio && errors.bio ? 
                        <Text style={{color:'red'}}>{errors.bio}</Text>
                    :null}
                </View>
             
        
                <Button
                    buttonColor={Theme.colors.gray200}
                    mode="contained"
                    onPress={handleSubmit}
                    contentStyle={{paddingVertical:6}}
                    style={{width:'100%',marginTop:6}}>
                    UPDATE PROFILE NOW
                </Button> 
            </View>
            )}
        </Formik>
          
            </ScrollView>
         </View>
            
         

            

       </View>
    )
}

const styles=StyleSheet.create({
   container:{
      flex:1,
      //backgroundColor:Theme.colors.lime300,
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
      paddingHorizontal:16,
      paddingVertical:20.
   },
   form:{
    gap:6,
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

