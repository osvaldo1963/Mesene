import React from 'react'
import { Text, View } from 'react-native'
import { 
    createMaterialTopTabNavigator 
} from '@react-navigation/material-top-tabs';
import Inbox from './Inbox';
import Calls from './Calls';
import Grouchat from './Groupchat';

const Tab = createMaterialTopTabNavigator()
const options = {

}
const Hometab = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#1DD2C1',
                indicatorStyle: {
                    backgroundColor: '#1DD2C1'
                }
            }}
            >
            <Tab.Screen 
                name="Inbox" 
                component={Inbox}/>
            <Tab.Screen 
                name="Calls" 
                component={Calls}/>
            <Tab.Screen 
                name="Groupchat" 
                component={Grouchat}/>
        </Tab.Navigator>
    )
}

export default Hometab