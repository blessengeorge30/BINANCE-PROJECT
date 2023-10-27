import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
    Image,
    ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { PRODUCT_HOME } from "../Components/homestocks";
import { FRIENDS_LIST } from "../Components/friendslist";
import { PRODUCT_CARD } from "../Components/cardlist";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";



const Profile = () => {
    const navigation = useNavigation();
    const binancepay = () => {
        navigation.navigate("Qrcode")
    }
    const Helpcenter = () => {
        navigation.navigate("Webview")
    }
    const renderitem = (item) => {

        return (
            <View style={styles.discovercrypto}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ height: 40, width: 40, marginLeft: 15, marginTop: 15 }} source={item.image} />
                    <Text style={{ marginLeft: 12, marginTop: 23, fontSize: 20, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 27, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>{item.price}</Text>
                    <Text style={{ marginLeft: 25, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'green' }}>{item.price1}</Text>

                </View>

            </View>
        )
    }

    const renderitems = (item) => {

        return (
            <View style={styles.discoverfriends}>
                <View style={{ alignSelf: 'center', marginVertical: 2 }}>
                    <Image style={{ height: 60, width: 60, }} source={item.image} />


                </View>

            </View>
        )
    }

    const renderitem1 = (item) => {

        return (
            <View style={styles.discovercards}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 12, marginTop: 18, fontSize: 20, fontWeight: 'bold', color: 'grey' }}>{item.name}</Text>
                    <Image style={{ height: 40, width: 40, marginLeft: 39, marginTop: 15, alignSelf: "flex-end" }} source={item.image} />

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 22, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'white' }}>{item.price}</Text>

                    <Text style={{ marginLeft: 45, marginTop: 15, fontSize: 16, fontWeight: 'bold', color: 'grey' }}>{item.price2}</Text>

                </View>
                <Text style={{ marginLeft: 25, marginTop: 1, fontSize: 16, fontWeight: 'bold', color: 'grey' }}>{item.price1}</Text>

            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/BG.jpg')}
                style={styles.backgroundImage}>
                <View style={{ flexDirection: 'row' }}>
                    {/* <View style={{flex:1}}> */}
                    <View>
                        <TextInput style={styles.inputView}
                            placeholder='Search'

                            placeholderTextColor='grey'
                            maxLength={12}></TextInput>
                    </View>
                    <View>
                        
                            <TouchableOpacity onPress={Helpcenter}>
                        <Image source={require('../assets/search1.png')}
                                style={styles.headerImage1}>
                                    </Image>
                       

                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={binancepay}>
                            <Image source={require('../assets/Binancelogo.png')}
                                style={styles.headerImage2}>
                            </Image>
                        </TouchableOpacity>
                    </View>



                    {/* </View> */}


                </View>
                <View style={{ marginRight: 150 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, color: 'grey', marginBottom: 5, marginTop: 22, marginLeft: 29 }}>Welcome Back , George !</Text>
                        <Image source={require('../assets/wave.png')}
                            style={styles.logo}>
                        </Image>
                    </View>

                    <Text style={{ fontSize: 18, color: 'white', marginBottom: 5, marginLeft: 29 }}>Total Balance</Text>
                    <Text style={{ fontSize: 35, color: 'white', marginBottom: 25, marginLeft: 29, fontWeight: 'bold' }}>$2,505.25</Text>

                </View>
            </ImageBackground>
            <View style={{ height: 900, backgroundColor: 'white', borderRadius: 34 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'black', marginBottom: 5, marginTop: 22, marginLeft: 29, marginRight: 35 }}>Portfolio</Text>
                    <Image source={require('../assets/pie.png')}
                        style={styles.logo1}>
                    </Image>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'black', marginBottom: 5, marginTop: 22, marginLeft: 55, marginRight: 35 }}>Profit/Earning</Text>
                    <Image source={require('../assets/dollar.png')}
                        style={styles.logo1}>
                    </Image>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 5, marginTop: 18, marginLeft: 22, marginRight: 35 }}> $85,885.55</Text>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 5, marginTop: 18, marginLeft: 38, marginRight: 35 }}> $2,885.55</Text>
                </View>
                <View style={{ marginVertical: 15 }}>
                    <ScrollView horizontal={true}>
                        {
                            PRODUCT_HOME?.map((item) => {
                                return renderitem(item);
                            })
                        }
                    </ScrollView>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', marginBottom: 2, marginTop: 22, marginLeft: 29, marginRight: 35 }}>FAST TRANSACTIONS</Text>
                    <ScrollView horizontal={true}>
                        {
                            FRIENDS_LIST?.map((item) => {
                                return renderitems(item);
                            })
                        }
                    </ScrollView>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 2, marginTop: 15, marginLeft: 29, marginRight: 35 }}>CARDS </Text>
                    <ScrollView horizontal={true}>
                        {
                            PRODUCT_CARD?.map((item) => {
                                return renderitem1(item);
                            })
                        }
                    </ScrollView>
                 

                </View>

            </View>
        </View>
    )
}
// }
const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'black',
        flex: 1
    },
    
    logo: {
        height: 125,
        width: 125,
        marginLeft: 22

    },
    button1: {
        backgroundColor: '#F0B90B',
        marginTop: 16,
        marginRight: 17,
        borderRadius: 10,
        elevation: 3, // Android shadow (optional)
      },
    backgroundImage: {
    },
    inputView: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 27,
        borderColor: 'white',
        paddingHorizontal: 115,
        marginRight: 15,
        height: 36,
        marginTop: 10,
        marginLeft: 25

    },
    headerImage1: {
        height: 25,
        width: 25,
        marginTop: 14,
        marginRight: 20,
        marginLeft:5,
        tintColor:'white'
      


    },
    headerImage2: {
        height: 28,
        width: 28,
        marginTop: 14,
        marginRight: 8,

    },
    headerImage3: {
        height: 28,
        width: 28,
        
        

    },
    logo: {
        height: 15,
        width: 15,
        marginBottom: 5,
        marginTop: 25,
        marginLeft: 5
    },
    logo1: {
        height: 18,
        width: 18,
        marginBottom: 5,
        marginTop: 25,
        marginLeft: 5
    },
    discovercrypto: {
        borderWidth: 0,
        borderColor: 'white',
        width: 180,
        height: 120,
        borderRadius: 20,
        marginHorizontal: 8,
        // alignItems: "center",
        // justifyContent: 'center',
        backgroundColor: '#EEEDED'
    },
    discoverfriends: {
        borderWidth: 2,
        borderColor: 'red',
        borderStyle: "dotted",
        width: 70,
        height: 70,
        borderRadius: 100,
        marginHorizontal: 8,
        marginVertical: 12,
        // alignItems: "center",
        // justifyContent: 'center',
        backgroundColor: '#EEEDED'
    },
    discovercards: {
        borderWidth: 0,
        borderColor: 'white',
        width: 180,
        height: 120,
        borderRadius: 20,
        marginTop: 5,
        marginHorizontal: 8,
        // alignItems: "center",
        // justifyContent: 'center',
        backgroundColor: '#242424'
    },

})
export default Profile;
