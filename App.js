/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './src/Pages/Welcome/Welcome'
import Signup  from './src/Pages/Auth/Signup'
import Login   from './src/Pages/Auth/Login'
import Hometab from './src/Pages/Home/Hometab';
import Message from './src/Pages/Chat/Message';
import { Provider } from 'mobx-react';
import Auth from './src/Stores/Auth';

const Stack = createStackNavigator()
const options = {
  headerStyle: {
      elevation: 0, 
      shadowOpacity: 0, 
  },
  headerLeft: null,
  headerTitleAlign: 'left',
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 22
  },
}
const App = () => {
  return (
    <Provider 
      auth={Auth} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Welcome" 
            component={Welcome}
            options={{
              headerShown: false
            }} />
          <Stack.Screen 
            name="Signup"
            component={Signup}
            options={options}
          />
          <Stack.Screen 
            name="Login"
            component={Login}
            options={options}
          />
          <Stack.Screen
            name="Hometab"
            component={Hometab}
            options={options}
          />
          <Stack.Screen 
            name="Message"
            component={Message}
            options={options}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
