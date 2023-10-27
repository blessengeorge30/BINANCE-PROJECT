import React from "react";
import { Text, View } from "react-native";


const Notification = () => {
    return (
<View style={{flex:1}}>
        <View style={{justifyContent:'center',alignItems: 'center',flex:1}}>
        <Text style={{ fontSize: 25,fontWeight: 'bold',color: 'black'}}> YOU HAVE NO NOTIFICATIONS !!!</Text>
   </View>
    </View>
    )
}
export default Notification;