import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Input, Item } from 'native-base'
import { inject, observer } from 'mobx-react'

const Authform = ({btnLabel, onPress, auth}) => {
    return(
        <View style={styles.emailView}>
            <Item rounded>
                <Input 
                    placeholder="email" 
                    onChangeText={(value) =>auth.setEmail(value)}/>
            </Item>
            <Item rounded>
                <Input 
                    placeholder="password"
                    onChangeText={(value) => auth.setPass(value)}/>
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

export default inject("auth")(observer(Authform))