import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { 
    ListItem, 
    Thumbnail, 
} from 'native-base'

const Onlinecell = () => {
    return(
        <ListItem itemDivider style={styles.mainView} >
            <View>
                <Thumbnail 
                    square
                    style={styles.thumbnailView}
                    source={{ uri: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2181&q=80' }} />
                <View style={styles.dotView}  />
                <Text>username</Text>
            </View>
        </ListItem>
    )
}
const styles = StyleSheet.create({
    mainView: {
        backgroundColor:'white'
    }, 
    thumbnailView: {
        borderRadius: 20, 
        backgroundColor: 'white'
    }, 
    dotView: { 
        position: 'absolute', 
        right: 5, 
        backgroundColor: 'lightgreen', 
        width: 14, 
        height: 14, 
        borderRadius: 7
    }
})
export default Onlinecell