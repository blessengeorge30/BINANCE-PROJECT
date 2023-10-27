import React from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { PRODUCT_DETAILED } from "../Components/productsdeatailed";

const Search = () => {
    const renderItem = (item) => {
        return (
          <View style={{ backgroundColor: 'black', flex: 1 }}>
            <View>
              <View style={{ flexDirection: 'row', }}>
                <Image style={{ height: 40, width: 40, marginLeft: 10 ,marginVertical :11,}} source={item.image} />

                <Text style={{color: 'white', marginHorizontal: 30,fontWeight: 'bold',fontSize:18,marginTop:13 }}>{item.name}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: 'white',marginHorizontal:30, alignSelf:'flex-end',marginTop:20,fontSize:16,color:'white' }}>{item.price}</Text>
                </View>
              </View>
              <Text style={{color: 'grey', fontWeight: 'bold',fontSize:18,position:'absolute',marginHorizontal:80,marginTop:34 }}>{item.name1}</Text>  

              <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'white', marginHorizontal: 10}}></View>
            </View>
          </View>
        );
      };
      
    return (
        <View style={{flex:1,backgroundColor:'black'}}>
            {/* <ImageBackground source={require('../assets/BG.jpg')}
                style={styles.backgroundImage}> */}
                     <Image source={require('../assets/Binancelogo.png')}
                    style={styles.logo}>
                </Image>
                <Text style={[styles.textView, styles.setColorblack]}></Text>
                <TextInput style={[styles.inputView, styles.setColorwhite]}
                    placeholder='Search '
                    placeholderTextColor='grey'
                    maxLength={20}>
                </TextInput>

            {/* </ImageBackground> */}
            <ScrollView>
            {
                        PRODUCT_DETAILED?.map((item) => {
                            return renderItem(item)
                        })
                    }
            </ScrollView>
           
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 110,
        width: 110,
        marginTop: 50,
        alignSelf:'center'
    },
    textView: {
        fontSize: 18,
        fontWeight: 'bold'
        //marginTop: 0
    },
    inputView: {
        width: '80%',
        height: 45,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#ebedec',
        marginTop: 27,
        marginBottom:35,
        paddingLeft: 35,
        alignSelf:'center',
        marginVertical:20,
        backgroundColor:'white'

    },
})
export default Search;
