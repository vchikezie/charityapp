import { Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Platform,
    StatusBar,
    ImageComponent,TextInput,
    } from 'react-native';
    import { sampleData } from './assets/data/sample-data';
    import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
    import { faUser } from '@fortawesome/free-regular-svg-icons';
    import React,{useState,useEffect} from 'react';
    import { faGear } from '@fortawesome/free-regular-svg-icons';
    import { faHouse } from '@fortawesome/free-solid-svg-icons';
    
  
  export default function app () {
      const [text,onchangetext] =React.useState('charity@gmail.com');
      const[number,onchangenumber] = React.useState('');
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
         <View style={styles.secondheader}>
           <FontAwesomeIcon 
             icon={faUser} color ='red'  size={50}/>
              
             <Text style={styles.note}>
              CHARITY APP 
             </Text>
         </View>
  
         <View style={styles.top}>
            <FontAwesomeIcon icon={ faUser} size={23} color ='red'/>
            <TouchableOpacity><Text>LOG IN</Text>
            </TouchableOpacity>
           </View>
          </View> 
          <View style={styles.secondnote}>
            <Text>welcome to my charityapp</Text>
            <TouchableOpacity><Text>HELP</Text>
            </TouchableOpacity>
          </View>
  
  
        <View style={styles.middle}>
          <Text style={styles.font}> TYPE YOUR EMAIL</Text>
        <TextInput 
            style={styles.input}
            onchangetext={onchangetext}
            value={text}
          />
          <Text style={styles.fontnum}>INPUT YOUR PASSWORD</Text>
          <TextInput
            style = {styles.input}
            onChangeText={onchangenumber}
            value={number}
            placeholder='11223344'
            keyboardType='numeric'
            />
  
             
         </View>  
  
  
      <View style={styles.note2}>
        <Text>HISTORY</Text>
        <Text>PAID</Text>
        <TouchableOpacity>
            <Text> CLEAR </Text>
        </TouchableOpacity>
      </View>   
  
  
    <View style={styles.recentScroll}>
               <FlatList 
               data={sampleData}
               renderItem={({item}) => {
                return(
                  
              <View style={styles.recentBlock}>
               <View style={styles.donationDetails}>
                  <Text style={styles.donationAmount}>₦{item.amount}</Text>
                  <Text style={styles.donationInfo}>{item.time} minutes ago</Text>
               </View>
    
              <Text style={styles.donationBy}>Donated by {item.email}</Text>
            </View>
                )
               }}
               key={({item}) => item.id}
               showsVerticalScrollIndicator={true}/>
               </View>
       <View style={styles.end}>
        <TouchableOpacity>
          <View style={styles.end2}>
            <FontAwesomeIcon icon={faHouse} size={50} color='grey'/>
            <Text>HOME</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <FontAwesomeIcon icon={faGear} size={22} color='grey'/>
          </View>
        </TouchableOpacity>
       </View>
             
  
  
      
       
          
  
  
          
        
       </SafeAreaView>
    )
  }
  
  const styles=StyleSheet.create({
    
    container:{
      backgroundColor:'#212A3E',
      borderColor:'',
      flex:1,
      marginTop:Platform.OS == 'android' ? StatusBar.currentHeight : 0,
      
    },
    header:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:41,
      borderStartColor:'#4C4C6D'
    },
    secondheader:{
      flexDirection:'row',
      
    },
    note:{
        flexDirection:'row',
        justifyContent:'center',
        fontSize:23
    
    },
    secondnote:{
      justifyContent:'space-between',
      paddingLeft:15,
      paddingTop:23,
      flexDirection:'row',
      paddingBottom:50,
      backgroundColor:'#4C4C6D'
    },
    input :{
      height: 40,
      margin:12,
      borderWidth:1,
      padding:10,
    },
    inputNUM:{
      flex:11,
      
    },
    box:{
        height:10,
        width:15
    },
    box2:{
      height:10,
      width:15
    },
    note2:{
        flexDirection:'row',
        paddingTop:10,
        justifyContent:'space-between',
        paddingLeft:15,
      backgroundColor:'#4C4C6D',
      
      
    },
    box3:{
      backgroundColor:'#4C4C6D',
      marginTop:20,
      borderWidth:2,
      borderColor:'white'
    },
    font:{
      fontSize:20
    },
    recentScroll:{
      flex:1,
      flexDirection:'column'
    },
    fontnum:{
      fontSize:20,
      marginTop:20,
    },
    middle:{
      backgroundColor:'#4C4C6D'
    },
    top:{
      justifyContent:'center',
      backgroundColor:''
    },  recentBlock:{
      backgroundColor:'#212A3E',
      paddingHorizontal:6,
      paddingVertical:8,
      gap:4,
      borderRadius:8,
      marginBottom:3
    },
    end2:{
      justifyContent:'center'
    }
  })
  