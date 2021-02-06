import React from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Cellitem from '../../Components/Buttons/Cellitem';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      username: 'First Item',
      message: "Yasterday", 
      time: "3:46pm"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      username: 'Second Item',
      message: "3 days ago", 
      time: "3:46pm"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      username: 'Third Item',
      message: "2 weeks ago", 
      time: "3:46pm"
    },
    
];
const Calls = () => {
    return(
        <SafeAreaView style={styles.mainView}>
            <FlatList 
                data={DATA} 
                renderItem={Cellitem}
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
export default Calls