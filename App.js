import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Flexbox from './screens/Flexbox';
import Home from './Bottomnavigation/Home';
import Webview from './screens/Webview';
import Qrcode from './screens/Qrcode';
import Register from './screens/Register';
import Signup from './screens/Signup';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Flexbox"
          component={Flexbox}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Webview"
          component={Webview}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Qrcode"
          component={Qrcode}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// import React from 'react'
// import { Text, View } from 'react-native'

// const Login =()=>{
//     return(
//         <View>
//             <Text>HI</Text>
//         </View>
//     )
// }
// export default Login;