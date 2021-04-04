import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Body, Left, ListItem, Right, Thumbnail, View } from 'native-base'
const DATA = [
    {url: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2181&q=80"}, 
    {url: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2181&q=80"}, 
    {url: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2181&q=80"}, 
    {url: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2181&q=80"},
    {url: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2181&q=80"},
];

const MultiCell = ({ item, onPress }) => {
    return(
        <ListItem avatar onPress={onPress}>
            <Body>
            <View style={styles.bodyStyle}>
                    {
                        DATA.map((item, index) => {
                            return(
                                <Thumbnail
                                    key={index} 
                                    square
                                    style={styles.thumbnail}
                                    source={{ uri: item.url}} />
                            )
                        }).slice(0, 3)
                    }   
                    <Text note>{`${DATA.length} group`}</Text>
                </View>
            </Body>
            <Right>
                <Text note>{item.time}</Text>
            </Right>
        </ListItem>
    )
};
const styles = StyleSheet.create({
    thumbnail: {
        borderRadius: 25,   
        marginLeft: -25
    }, 
    bodyStyle: {
        flexDirection:'row',
        flex:1,
    }
})
export default MultiCell