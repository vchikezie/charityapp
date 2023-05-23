import { useState,useEffect,useCallback } from "react";
import { 
View,
Text,
StyleSheet,
FlatList,TouchableOpacity,
Image,} from "react-native";
import { sampleData } from '../assets/data/sample-data';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeartCirclePlus,faUsersViewfinder,faClockRotateLeft,faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; 
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { SafeArea } from "../components/SafeArea";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { Donate } from "./Donate";
import { About } from "./About";
import { Theme } from "../utils/Theme";




const Tab = createBottomTabNavigator();

function Home ({navigation}) {
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
      <View style={styles.header} >
       <Text style={styles.brandName}>charityapp</Text>
        <FontAwesomeIcon icon={faUser} color="#5C469C" size={32}/>
      </View>
      <View style={styles.body}>
        <View style={styles.actionBlock}> 
          <TouchableOpacity style={styles.actionBox}>
            <FontAwesomeIcon icon={faHeartCirclePlus} color={Theme.colors.purple100}
            size={Theme.sizes[5]}/>
            <Text style={styles.optionText}>Donate</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBox}>
            <FontAwesomeIcon icon={faUsersViewfinder} color={Theme.colors.purple100}
            size={Theme.sizes[5]}/>
            <Text style={styles.optionText}>Raisers</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBox}>
            <FontAwesomeIcon icon={faClockRotateLeft} color={Theme.colors.purple100}
            size={Theme.sizes[5]}/>
            <Text style={styles.optionText}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBox}onPress={() => navigation.navigate('Create')}>
            <FontAwesomeIcon icon={faCirclePlus} color={Theme.colors.purple100}
            size={Theme.sizes[5]}/>
            <Text style={styles.optionText}>create</Text>
          </TouchableOpacity>

       
        </View>

        <View style={styles.recent}>
          <Text style={styles.recentTitle}>Recent donations</Text>

          <View style={styles.recentScroll}>
            <FlatList 
            data={sampleData}
            renderItem={({item}) => {
              return (
                <View style={styles.recentBlock}>
                  <View style={styles.donationDetails}>
                    <Text style={styles.donationAmount}>₦{item.amount}</Text>
                    <Text style={styles.donationInfo}>{item.time} minutes ago</Text>
                  </View>
    
                  <Text style={styles.donatedBy}>Donated by {item.email}</Text>
                </View>
              )
            }}
            key={({item}) => item.id}
            showsVerticalScrollIndicator={false}/>
          </View>
        </View>
      </View>
    </SafeArea>
  )
}

export function MyHome ({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Donate') {
            iconName = focused ? 'heart' : 'heart-circle-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Theme.colors.purple300,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="Donate" component={Donate} options={{headerShown:false}}/>
      <Tab.Screen name="About" component={About} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  brandName:{
    fontSize:28,
    fontWeight:'bold',
    color:Theme.colors.purple900,
    fontFamily:'Pacifico_400Regular'
  },
  headerIcon:{
    width:48,
    height:48
  },
  optionText:{
    fontSize:26,
    color:'white'

  },
  body:{
    flex:1,
    marginTop:10
  },
  actionBlock:{
    flex:2.5,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    gap:6,
  
  },
  recent:{
    flex:3.5,
    marginTop:16,
    padding:8,
    borderRadius:8,
    backgroundColor:'#FDE2F3',
  },
  actionBox:{
    width:'49%',
    height:'49%',
    justifyContent:'center',
    alignItems:'center',
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
    flex:1,//new
    flexDirection:'column',//new
  },
  donationDetails:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  donationAmount:{
    fontSize:20,
    color:'#fff'
  },
  donationInfo:{
    color:'#D4ADFC'
  },
  donatedBy:{
    color:'#D4ADFC',
    fontSize:16
  }
})