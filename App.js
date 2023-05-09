import { Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  } from 'react-native';

export default function App () {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
       <View style={styles.header}>
         <View style={styles.leftHeader}>
           <Image 
           source={require('./assets/charityApp.png')} 
           alt='app logo'
           style={styles.logo}/>
           <Text style={styles.brandName}>charityApp</Text>
         </View>

         <Image 
         source={require('./assets/user.png')}
         alt='icon'
         style={styles.headericon}/>
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
          <View style={styles}>
            <View style={styles.donationDetail}>
              <Text style={styles.donationAmount}>₦1200</Text>
              <Text style={styles.donationInfo}>1 minutes ago</Text>
            </View>
            <Text style={styles.donationDetailBy}>Donated by sample@gmail.com</Text>
          </View>


         </View>
        </View> 
      </View>
     </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    
  },
  wrapper:{
    flex:1,
    paddingHorizontal:12

  },
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
    color:'red'
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
    
  },
  actionBox:{
    width:'49%',
    height:'49%',
    backgroundColor:'#77037B',
    borderRadius:10,
  }
})