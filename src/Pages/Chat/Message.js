import React from 'react'
import { Text, FlatList, TextInput, StyleSheet, TouchableHighlight } from 'react-native'
import { Button, Input, ListItem, View } from 'native-base'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        local: true,
        username: 'First Item',
        message: "I am on my wayksjbdhsbdjhsdbsdvhsgdvshgdvshgdvhsgdvshgdvshgdvhsgdvhsgdvhsgd", 
        time: "3:46pm"
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      local: false,
      username: 'First Item',
      message: "I am on my way", 
      time: "3:46pm"
    },
    
]
const Cell = ({ item }) => {
    return(
        <ListItem itemDivider style={{backgroundColor:'white'}}>
            <View style={{ flex: 1, flexDirection: 'row'}}>
                {item.local? <View style={{flex:1}}></View>: <View></View>}
                <View style={{
                    flex: 2, 
                    backgroundColor: item.local? '#1DD2C1':'lightgray',
                    borderTopLeftRadius: 15, 
                    borderTopRightRadius: 15,
                    borderBottomLeftRadius: item.local? 15: 0, 
                    borderBottomRightRadius: item.local? 0: 15 }}>
                    <Text style={{margin: 10}} >{item.message}</Text>
                </View>
                {item.local? <View></View>: <View style={{flex:1}}></View>}
            </View>
        </ListItem>
    )
}
const Item = () => {
    
}
const Message = () => {
    return(
        <View style={{backgroundColor: 'white', flex: 1,}}>
            <FlatList
                    data={DATA}
                    renderItem={Cell}
                    inverted
                    keyExtractor={item => item.id} />
            <View style={style.messsageView} > 
                <TextInput placeholder="message me" style={style.textInput}/>
                <TouchableHighlight style={style.sendText} onPress={() => console.log()} >
                    <Text style={style.sendBtnText}>send</Text>
                </TouchableHighlight >

            </View>
            
        </View>
    ) 
}
const style = StyleSheet.create({
    messsageView: {
        flexDirection: 'row'
    }, 
    textInput: {
        flex: 5, 
        backgroundColor: '#F7FBFF',
    }, 
    sendText: {
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#F8F7F9'
    }, 
    sendBtnText: {
       fontSize: 13, 
       fontWeight: 'bold'
    }
})
export default Message