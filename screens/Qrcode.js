import React from "react";
import { Text,
     View,
     Image,
    StyleSheet,
    ScrollView,                                                                                                                                                                                                                         
    ImageBackground } from "react-native";
    import Icon from 'react-native-vector-icons/AntDesign';   
import { PRODUCT_PROFILEITEMS } from "../Components/profileitemlist";


const Profile = () => {
    const renderItem = (item) => {
        return (
           
          <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View>
              <View style={{ flexDirection: 'row', }}>
                <Image style={{ height: 30, width: 30, marginLeft: 30 ,marginVertical :15,}} source={item.image} />

                <Text style={{color: 'black',fontWeight: 'bold',fontSize:14,marginLeft:15,marginTop:15 }}>{item.name}</Text>
              </View>
              <Text style={{color: 'grey', fontWeight: 'bold',fontSize:12,position:'absolute',marginTop:34,marginLeft:75 }}>{item.name1}</Text>  

              <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'white', marginHorizontal: 10 }}></View>
            </View>
          </View>
        );
        
      };
    return (
    <ScrollView style={styles.container}>
        <ImageBackground  source={require('../assets/binancepaybg.jpg')}
                style={styles.backgroundImage}>
        <View style={{ flexDirection: 'row',marginTop:50,marginBottom:70 }}>
        <View style={{flex:1}}>
        
        </View>
        <View style={{marginTop:24,marginRight:220}}>
        <Text style={{fontSize: 29,fontWeight: 'bold',color: 'white'}}></Text>
        <Text style={{ fontSize:18,color: 'grey'}}></Text>
        <Text style={{fontSize: 29,fontWeight: 'bold',color: 'white'}}></Text>
       
        
        </View>
        {/* <Image source={require('../assets/blessen.jpg')}
                    style={styles.logo}>
                </Image> */}
        
        
       
        </View>
        </ImageBackground>
        <View style={{height:900,backgroundColor:'white',borderRadius:15,marginTop:-15}}>
        <View style={styles.headercard}>
        <View >
      
        <Image source={require('../assets/BPQR.jpeg')}
                    style={styles.logo}/>

        <View style={{alignSelf:'flex-end',}}>
      

        </View>
        </View>
        {/* <View style={{ flexDirection: 'row'}}>
            
                <Image source={require('../assets/wallet.png')}
                    style={styles.bank}>
                </Image>
                <Image source={require('../assets/sendcrypto.png')}
                    style={styles.bank1}>
                </Image>
                <Image source={require('../assets/qrcodeicon.png')}
                    style={styles.bank2}>
                </Image> 
               
                </View>
                <View style={{ flexDirection: 'row'}}>
                <Text style={{fontSize:14,marginLeft:40,marginTop:10,color:'white'}}>Recieve</Text> 
                <Text style={{marginLeft:74,marginTop:10,color:'white'}}>Send</Text> 
                <Text style={{marginLeft:70,marginTop:10,color:'white'}}>Scan to Pay</Text> 
            </View> */}
              
        </View>
        <View>
        <ScrollView style={{marginTop:25}}>
            {
                        PRODUCT_PROFILEITEMS?.map((item) => {
                            return renderItem(item)
                        })
                    }
            </ScrollView>
        </View>

        </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        height:100,
        backgroundColor: 'black',
        flex:1
    },
    logo: {
    height: 280,
    width: 285,
    borderRadius:10,
    alignSelf:"center",
    marginVertical:15
    
},
backgroundImage:{
},
headercard: {
    borderWidth:0,
    width:'55%',
    height: 310,
    backgroundColor:'black',
    marginTop:-55,
    alignSelf:"center",
    borderRadius:30,
    elevation:20,
    marginBottom:20

        
},
cardtext:{
    marginTop:22,
    marginLeft:54,
    color:'white',
    fontSize:15,
   marginRight:10,

},
bank:{
        height: 40,
        width: 40,
        marginTop:35,
        marginLeft:45,
        tintColor:"#fff"
        
      
    },
    bank1:{
        height: 40,
        width: 40,
        marginTop:35,
        marginLeft:75,
        tintColor:"#F0B90B"
        
    },
    bank2:{
        height: 45,
        width: 40,
        marginTop:38,
        marginLeft:80,
        
    },


})
export default Profile;