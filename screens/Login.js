import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native'

const Login = () => {
    const navigation = useNavigation();
    const flex = () => {
        navigation.navigate("Flexbox")
    }
    const Forgotpassword = () => {
        navigation.navigate("Register")
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/BG.jpg')}
                style={styles.backgroundImage}>
                <Image source={require('../assets/Binancelogo.png')}
                    style={styles.logo}>
                </Image>
                <Text style={[styles.textView, styles.setColorblack]}></Text>
                <TextInput style={[styles.inputView, styles.setColorwhite]}
                    placeholder='Username'

                    placeholderTextColor='grey'
                    maxLength={12}>
                </TextInput>
                <TextInput style={[styles.inputView, styles.setColorwhite]}
                    placeholder='Password'
                    placeholderTextColor='grey'
                    secureTextEntry={true}>
                </TextInput>
                <TouchableHighlight style={styles.buttonView}
                    underlayColor='transparent'
                    onPress={flex} >
                    <Text style={styles.buttontext}> Login </Text>
                </TouchableHighlight>
                <TouchableOpacity onPress={Forgotpassword}>
                    <Text style={styles.bottomlogintxt}> Forgot Password ?</Text>

                </TouchableOpacity>

            </ImageBackground>
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 110,
        width: 110,
        marginBottom: 15,
        marginTop:65
    },
    textView: {
        fontSize: 18,
        fontWeight: 'bold'
        //marginTop: 0
    },
    setColorblack: {
        color: '#000000'
    },
    inputView: {
        width: '80%',
        height: 55,
        borderWidth: 0.5,
        borderRadius: 15,
        borderColor: 'white',
        marginTop: 25,
        paddingLeft: 10,

    },
    buttonView: {
        width: 125,
        height: 35,
        backgroundColor: '#ebedec',
        marginTop: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: 40

    },
    buttontext: {
        fontSize: 14,

        color: 'black'
    },
    bottomlogintxt: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        color:'white'
    },
    headerImage2: {
        height: 28,
        width: 28,
        marginTop: 14,
        marginRight: 8,
        

    },
})
export default Login;


// import React from 'react'
// import { Text, View,TouchableOpacity } from 'react-native'
// import { useNavigation } from "@react-navigation/native";


// const Login =()=>{
//     const navigation=useNavigation()
//     const next =()=>{
//         navigation.navigate('Flexbox')
//     }
//     return(
//         <View>
//             <Text>HI</Text>
//             <TouchableOpacity onPress={next}><Text style={{color:'black'}}>HIHI</Text></TouchableOpacity>
//         </View>
//     )
// }
// export default Login;
