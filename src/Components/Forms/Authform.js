import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Input, Item } from 'native-base'

const Authform = ({btnLabel, onPress}) => {
    return(
        <View style={styles.emailView}>
            <Item rounded>
                <Input placeholder="email"/>
            </Item>
            <Item rounded>
                <Input placeholder="password"/>
            </Item>
            <Button rounded style={styles.emailBtn} onPress={onPress}>
                <Text style={styles.textColor}>{btnLabel}</Text>
            </Button>
        </View>
    )
}
const styles = StyleSheet.create({ 
    emailView: {
        flex: 4,
        flexDirection: 'column', 
        justifyContent: 'space-evenly'
    },
    emailBtn: {
        width: '100%',
        justifyContent: 'center' ,
        backgroundColor: '#1DD2C1', 
        alignSelf: 'center'
    },
    textColor: { color: 'white'}
})

export default Authform