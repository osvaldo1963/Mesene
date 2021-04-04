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
const RenderImages = ({data}) => {
    console.log(data)
    var i;
    for(i =0; i< DATA.length; i++) {
        console.log(i)
        return (
            <View >
                <Thumbnail 
                    square
                    style={styles.thumbnail}
                    source={{ uri: DATA[i].url}} />
                
                <View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right:0, backgroundColor: 'black', borderRadius: 25}}>
                    <Text style={{color: 'white'}}>{data.length}</Text>
                </View>
            </View>
        )
    }
}
const MultiCell = ({ item, onPress }) => {
    return(
        <ListItem avatar onPress={onPress}>
            <Left>
                
            </Left>
            <Body>
                <View style={styles.bodyStyle}>
                    <RenderImages data={DATA} />   
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
        marginLeft: -4
    }, 
    bodyStyle: {
        flexDirection:'row',
        flex:1,
    }
})
export default MultiCell