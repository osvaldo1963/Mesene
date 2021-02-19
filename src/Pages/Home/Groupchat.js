import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Grouchat = () => {
    return(
        <View style={style.mainView}>
            <Text>inbox </Text>
        </View>
    )
}
const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    }
})
export default Grouchat