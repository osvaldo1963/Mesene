import { Badge, ListItem, Thumbnail } from 'native-base';
import React from 'react'
import { SafeAreaView, StyleSheet, View, Text} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Cellitem from '../../Components/Buttons/Cellitem';

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
const cell = () => {
    return(
        <ListItem itemDivider={false} >
            <View>
                <Thumbnail 
                    square
                    style={{borderRadius: 20}}
                    source={{ uri: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2181&q=80' }} />
                <View style={{ position: 'absolute', right: 5, backgroundColor: 'lightgreen', width: 14, height: 14, borderRadius: 7}}  />
                <Text>username</Text>
            </View>
        </ListItem>
    )
}
const HeaderList = () => {
    return(
        <View>
            <View>
                <Text>Online Contact</Text>
            </View>
            
            <FlatList 
                horizontal
                data={DATA}
                renderItem={cell}
                />
        </View>
    )
}
const Inbox = () => {
    return(
        <SafeAreaView style={styles.mainView}>
            <FlatList 
                data={DATA} 
                renderItem={Cellitem}
                ListHeaderComponent={HeaderList}
                keyExtractor={item => item.id} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 'white', 
        flex:1,
    }, 
    cellView: {
        height: 80, 
        backgroundColor: 'gray', 
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
})
export default Inbox