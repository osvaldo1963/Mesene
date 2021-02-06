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
    activeTintColor: '#1DD2C1',
    indicatorStyle: {
        backgroundColor: 'transparent',
    }, 
    tabStyle: {
        borderRadius: 10,  
        
    }, 
    style: {
        alignSelf:'center',
        borderRadius: 15, 
        backgroundColor: '#F7FBFF',
        width: '94%', 
        elevation: 0, 
        shadowOpacity: 0
    }
}
const Hometab = () => {
    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
        <Tab.Navigator
            tabBarOptions={options} >
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
        </View>
    )
}

export default Hometab