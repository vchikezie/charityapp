import {useState,useEffect,useCallback } from 'react';
import { Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  } from 'react-native';
  import { sampleData } from '../assets/data/sample-data';
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
  import { faUser } from '@fortawesome/free-regular-svg-icons';
  import * as SplashScreen from 'expo-splash-screen';
  import * as Font from 'expo-font';
  import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
  import { SafeArea } from '../components/SafeArea';
  
  


export function Home() {
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
    return null;
  }
return(
<SafeArea>

    <View style={styles.header}>
        <View style={styles.leftHeader}>

        <Image 
        source={require('../assets/charityApp.png')} 
        alt='app logo'
        style={styles.logo}/>
        <Text style={styles.brandName}>charityApp</Text>
        </View>
        <FontAwesomeIcon icon={faUser} color ='blue'  size={36}/>
        
    

        
    
    </View>

    <View style={styles.body}>
        <View style={styles.actionBlock}>
        <View style={styles.actionBox}>
        
        </View>
        <View style={styles.actionBox}>
        
        </View>
        <View style={styles.actionBox}>
        
        </View>
        <View style={styles.actionBox}>
        
        </View>
        </View>

        <View style={styles.recent}>
        <Text style={styles.recentTitle}> recent donation</Text>

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
        </View>
    </View> 
</SafeArea>
)
}

const styles=StyleSheet.create({
  header:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  leftHeader:{
    flexDirection:'row',
    alignItems:'center'
  },
  logo:{
    width:52,
    height:52,
    marginRight:4
  },
  brandName:{
    fontSize:28,
    fontWeight:'bold',
    color:'red',
    fontFamily:'Pacifico_400Regular'
  },
  headericon:{
    width:48,
    height:48,

  },
  body:{
    flex:1,
    
  },
  actionBlock:{
    flex:2.5,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    gap:6,
    backgroundColor:'#E34DA2',
    padding:8,
    borderRadius:10,
  },
  recent:{
    flex:3.5,
    margineTop:8,
    padding:8,
    borderRadius:8,
    backgroundColor:'#FDE2F3'
    
  },
  actionBox:{
    width:'49%',
    height:'49%',
    backgroundColor:'#77037B',
    borderRadius:10,
  },
  recentTitle:{
    fontSize:22,
    marginBottom:2
  },
  recentBlock:{
    backgroundColor:'#5C469C',
    paddingHorizontal:6,
    paddingVertical:8,
    gap:4,
    borderRadius:8,
    marginBottom:3
  },
  recentScroll:{
    flex:1,
    flexDirection:'column'
  },
  donationDetails:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  donationAmount:{
    fontSize:20,
    color:'#fff'
  },donationInfo:{
    color:'#D4ADFC',
    fontSize:16
  },
  donatedBy:{
    color:'#D4ADFC',
    fontSize:16
  },
})

