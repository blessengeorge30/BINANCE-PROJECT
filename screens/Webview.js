import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView
} from 'react-native'

import { DISCOVER_ITEM } from "../Components/discoveritems";
import { PRODUCT_DETAILED } from "../Components/productsdeatailed";

const Search = () => {
    const renderitem = (item) => {
        
        return (
            <View style={styles.discovercrypto}>
                
                <Image style={{ height: 50, width: 50, marginBottom:5 }} source={item.image} />
                <Text style={{ marginBottom: 2,fontWeight:'bold', color:'white'}}>{item.name}</Text>
                <Text style={{ marginBottom: 2,fontWeight:'bold', color:'white'}}>{item.price}</Text>
                <Text style={{ marginBottom: 2,fontWeight:'bold', color:'white'}}>{item.price1}</Text>
                <Text style={{ marginBottom: 6,fontWeight:'bold', color:'green'}}>{item.price2}</Text>
            </View>
        )
    }
    // const renderItem = (item) => {
    //     return (
    //       <View style={{ height:40,width:500,backgroundColor: 'black', flex: 1 }}>
    //         <View>
              

    //             <Text style={{color: 'white', marginHorizontal: 30,fontWeight: 'bold',fontSize:18,marginTop:13 }}>{item.name}</Text>
                
    //           </View>
    //           <Text style={{color: 'grey', fontWeight: 'bold',fontSize:18,position:'absolute',marginHorizontal:80,marginTop:34 }}>{item.name1}</Text>  

    //           <View style={{ borderBottomWidth: 0.1, borderBottomColor: 'white', marginHorizontal: 10 }}></View>
    //         </View>
          
    //     );
    //   };

   
     


    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/BG.jpg')} style={styles.backgroundImage}>
                <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/Searchicon.png')}
                    style={styles.logo}></Image>
                         {/* <ActivityIndicator size={35} color='white' animating={true} /> */}
                <Text style={[styles.textView, styles.setColorblack]}></Text>
                <TextInput style={[styles.inputView, styles.setColorwhite]}
                    placeholder='Search'
                    placeholderTextColor='grey'
                    maxLength={20}>
                </TextInput>

                </View>
                
              
                <Text style={{fontSize:25,fontWeight:'bold',marginTop:45}}>EXPLORE MARKET</Text>
                <ScrollView horizontal={true}>
                    {
                        DISCOVER_ITEM?.map((item) => {
                            return renderitem(item);
                        })
                    }
                </ScrollView>
                {/* <ScrollView>
            {
                        PRODUCT_DETAILED?.map((item) => {
                            return renderItem(item)
                        })
                    }
            </ScrollView>
           */}
              <View style={styles.container1}>
                        <TouchableOpacity style={styles.button1}>
                        <Image source={require('../assets/wallet1.png')}
                                style={styles.headerImage3}>
                                    </Image>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container1: {
       
        position: 'absolute',
        bottom: 20, // Adjust the value to move the button up or down
        right: 20, // Adjust the value to move the button left or right
        
      },
      button1: {
        backgroundColor: '#F0B90B',
        padding: 20,
        borderRadius: 25,
        elevation: 3, // Android shadow (optional)
      },
      buttonText1: {
        color: 'black',
        fontWeight: 'bold',
      },
      headerImage3: {
        height: 28,
        width: 28,
    },
     
    logo: {
        height: 20,
        width: 25,
        marginTop:20,
        tintColor:'white'
    },
    textView: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputView: {
        width: '75%',
        height: 35,
        borderWidth: 0.5,
        borderRadius: 25,
        borderColor: 'white',
        backgroundColor:'white',
        marginTop: 15,
        paddingLeft: 40,
        marginLeft:10
        
    },
    discovercrypto: {
        borderWidth: 0,
        borderColor: 'white',
        width: 120,
        height: 120,
        borderRadius: 20,
        marginVertical: 35,
        marginHorizontal: 8,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor:'#252525'
    },
    discoverstocks: {
        borderWidth: 0,
        borderColor: 'white',
        width: 120,
        height: 120,
        borderRadius: 20,
        marginVertical: 35,
        marginHorizontal: 8,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor:'#252525'
    },
});

export default Search;