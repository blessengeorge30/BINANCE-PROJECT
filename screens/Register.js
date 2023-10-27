import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';
import { PRODUCT_PROFILEITEMS } from "../Components/profileitemlist";



const Profile = () => {
  const navigation = useNavigation();
  const Signup = () => {
      navigation.navigate("Signup")
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/BG.jpg')}
        style={styles.backgroundImage}>
        <View style={{ flexDirection: 'row', marginTop: 50, marginBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <Image source={require('../assets/binancehorzontal.png')}
              style={styles.logo}>
            </Image>
          </View>



        </View>
      </ImageBackground>
      <View style={{ height: 1000, backgroundColor: 'white', borderRadius: 30, }}>
        <View>
          <Image source={require('../assets/signup.jpg')}
            style={styles.signupimg}>
          </Image>
        </View>
        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, alignSelf: "center", marginTop: 15 }}>Sign up to get  100 USDT trading fee rebate !</Text>
        </View>
        <TouchableOpacity style={styles.buttonView}
        onPress={Signup} >
          <Image source={require('../assets/user-male.png')}
            style={styles.logo1}>
          </Image>
          <Text style={styles.buttontext}> SIGN UP WITH EMAIL OR PHONE</Text>
        </TouchableOpacity>
        <View>
          <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 15, alignSelf: "center", marginTop: 14 }}>--------------OR------------</Text>
        </View>
        <TouchableOpacity style={styles.buttonView1} >
          <Image source={require('../assets/google.png')}
            style={styles.logo2}>
          </Image>
          <Text style={styles.buttontext1}> CONTINUE WITH GOOGLE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonView1} >
          <Image source={require('../assets/apple.png')}
            style={styles.logo2}>
          </Image>
          <Text style={styles.buttontext1}> CONTINUE WITH APPLE </Text>
        </TouchableOpacity>


      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'black',
    flex: 1
  },
  logo: {
    height: 150,
    width: 170,
    marginTop: 0,
    // marginLeft:45,
   
    alignSelf: "center"

  },
  logo1: {
    height: 15,
    width: 15,



  },
  logo2: {
    height: 20,
    width: 20,

  },

  backgroundImage: {
  },
  headercard: {
    borderWidth: 0,
    width: '89%',
    height: 200,
    backgroundColor: '#282928',
    marginTop: -45,
    marginHorizontal: 20,
    borderRadius: 30,
    elevation: 15


  },
  cardtext: {
    marginTop: 12,
    marginLeft: 24,
    color: 'white',
    fontSize: 18,
    marginRight: 110
  },
  bank: {
    height: 65,
    width: 65,
    marginTop: 30,
    marginLeft: 40

  },
  bank1: {
    height: 45,
    width: 45,
    marginTop: 38,
    marginLeft: 60,

  },
  bank2: {
    height: 50,
    width: 50,
    marginTop: 38,
    marginLeft: 58,

  },
  signupimg: {
    height: 250,
    width: 250,
    marginTop: 5,
    alignSelf: "center"

  },
  buttonView: {
    width: '80%',
    height: 35,
    backgroundColor: '#F0B90B',
    marginTop: 45,
    borderRadius: 8,
    alignSelf: "center",
    alignItems: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 40,
    flexDirection: "row",


  },
  buttonView1: {
    width: '80%',
    height: 35,
    backgroundColor: '#ebecf0',
    marginTop: 22,
    borderRadius: 8,
    alignSelf: "center",
    alignItems: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 40,
    flexDirection: "row",


  },


  buttontext: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10


  },

  buttontext1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20


  },


})
export default Profile;