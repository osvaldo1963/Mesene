import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Body, Left, ListItem, Right, Thumbnail } from 'native-base'

const Cellitem = ({ item, onPress }) => {
    return(
        <ListItem avatar onPress={onPress}>
            <Left>
                <Thumbnail 
                    square
                    style={styles.thumbnail}
                    source={{ uri: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2181&q=80' }} />
            </Left>
            <Body>
                <Text>{item.username}</Text>
                <Text note>{item.message} ...</Text>
            </Body>
            <Right>
                <Text note>{item.time}</Text>
            </Right>
        </ListItem>
    )
}
const styles = StyleSheet.create({
    thumbnail: {
        borderRadius: 20
    }
})
export default Cellitem