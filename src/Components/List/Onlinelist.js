import { Form } from 'native-base'
import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import {  } from 'native-base'
import Onlinecell from '../Cell/Onlinecell'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      username: 'First Item',
      message: "I am on my way", 
      time: "3:46pm"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      username: 'Second Item',
      message: "I cant today ", 
      time: "3:46pm"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      username: 'Third Item',
      message: "I will  see you there ", 
      time: "3:46pm"
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baq',
        username: 'First Item',
        message: "I am on my way", 
        time: "3:46pm"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6233',
        username: 'Second Item',
        message: "I cant today ", 
        time: "3:46pm"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d2372',
        username: 'Third Item',
        message: "I will  see you there ", 
        time: "3:46pm"
    },
    
];

const Onlinelist = () => {
    return(
        <View >
            <View style={styles.titleView}>
                <Text style={styles.title}>Online Contact</Text>
            </View>
            <FlatList 
                horizontal
                data={DATA}
                renderItem={Onlinecell}
                showsHorizontalScrollIndicator={false}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    titleView: {
        marginLeft: 15,
        marginTop: 10
    }, 
    title: {
        color:'gray',
        fontWeight: 'bold'
    }
    
})

export default Onlinelist