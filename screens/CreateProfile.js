import { View,ActivityIndicator,Text,StyleSheet,Alert} from "react-native";
import { SafeArea } from "../components/SafeArea";
import {useContext, useState } from "react";
import { AppContext } from "../settings/globalVariables";
import { TextInput,Button } from 'react-native-paper';
import * as yup from 'yup';
import { Formik } from "formik";
import { db } from "../settings/FireBase.setting";
import { setDoc,doc} from "firebase/firestore";



// use for the login and signup button 
const validationRules = yup.object({
    fName:yup.string().required('required field',),
    lName:yup.string().required('required field',),
    city:yup.string().required('required field',),
    mail:yup.string().required('required field',).min(16),
    dob:yup.string(),
    bio:yup.string(),
});

export function CreateProfile ({navigation}) {
    const {uid} = useContext(AppContext);
    const [eventActivityIndicator,seteventActivityIndicator]= useState(false);

   
      return(
        <SafeArea>
                <Text style={styles.title}>Create Your Profile </Text>
                { eventActivityIndicator ? <ActivityIndicator size='small'/> :null}
                <Formik
                initialValues={{fName:'',lName:'',mail:'',dob:'',bio:'', }}
    onSubmit={(values,action) =>{
      seteventActivityIndicator(true);
      setDoc(doc(db,'users',uid),{
        firstName:values.fName,
        lastName:values.lName,
        mailingAddress:values.mail,
        city:values.city,
        dateOfBirth:'01/27/2000',
        bioInfo:values.bio,
        CreatedAt:new Date().getTime()
      }).then(() => {
        seteventActivityIndicator(false);
        Alert.alert(
          'Message',
          'profile created!!',
          [
            {text:'Go to Home',onPress:() => navigation.navigate('My Home')},
            {text:'Go to Profile',onPress:() => navigation.navigate('Profile')}
          ]
        )
      })
      .catch(error => {
        seteventActivityIndicator(false);
        Alert.alert(
          'message',
          error.message,
          [{text:'Dismiss'}]
        )
      })

      }}
      validationSchema={validationRules}
    >
      {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
        <View>
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

          <View style={styles.button}>
            <Button
            buttonColor="#5D9C59"
            textColor="black" 
            mode="contained"
            onPress={handleSubmit}
            contentStyle={{paddingVertical:6}}
            style={{marginVertical:12}}>
              {
                eventActivityIndicator
                ?<ActivityIndicator size='small'/>
                :'Create Profile'
              }
            </Button>
          </View>
        </View>
      )}
          </Formik>
          
              
          </SafeArea>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:35,
    },
    form:{
      flexDirection:'column',
      gap:4
    }
  })