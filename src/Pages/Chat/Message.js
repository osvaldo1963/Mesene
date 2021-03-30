import React from 'react'
import { 
    Text, 
    FlatList, 
    TextInput, 
    StyleSheet, 
    TouchableHighlight, 
    SafeAreaView, 
    KeyboardAvoidingView, 
    Platform 
} from 'react-native'
import { ListItem, View } from 'native-base'
import Navbutton from '../../Components/Buttons/Navbutton'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        local: true,
        username: 'First Item',
        message: "I am on my wayksjbdhsbdjhsdbsdvhsgdvshgdvshgdvhsgdvshgdvshgdvhsgdvhsgdvhsgd", 
        time: "3:46pm"
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bac',
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
const Message = ({ navigation }) => {
    const goback = () => navigation.goBack()
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Navbutton onPress={goback}/>,
        })
    }, [navigation])
    return(
        <KeyboardAvoidingView 
            style={{flex:1}}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 85 : 0}>
            <SafeAreaView style={style.mainView}>
                <FlatList
                        data={DATA}
                        renderItem={Cell}
                        inverted
                        keyExtractor={item => item.id} />
                <View style={style.messsageView} > 
                    <TextInput placeholder="message me" style={style.textInput}/>
                    <TouchableHighlight style={style.sendText} onPress={() => console.log()} >
                        <FontAwesomeIcon icon={faPaperPlane} color="#1DD2C1"/>
                    </TouchableHighlight >
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    ) 
}
const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white',
    },
    messsageView: {
        flexDirection: 'row', 
        height: 50
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