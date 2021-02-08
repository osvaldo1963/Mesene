import { Badge, ListItem, Thumbnail } from 'native-base';
import React from 'react'
import { SafeAreaView, StyleSheet, View, Text} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Cellitem from '../../Components/Cell/Cellitem';
import Onlinelist from '../../Components/List/Onlinelist';

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

const Inbox = ({ navigation }) => {
    console.log(navigation)
    
    return(
        <SafeAreaView style={styles.mainView}>
            <FlatList 
                data={DATA} 
                renderItem={({ item }) => <Cellitem item={item} onPress={() => navigation.navigate("Message")}/>}
                ListHeaderComponent={Onlinelist}
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