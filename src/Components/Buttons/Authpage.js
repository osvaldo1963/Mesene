import React from 'react'
import {
    Text,
    View, 
    StyleSheet,
    TouchableHighlight
} from 'react-native'

const Authpage = ({ label, btnLabel }) => {
    return(
        <View style={styles.loginView}>
            <Text>{label}</Text>
            <TouchableHighlight>
                <Text>{btnLabel}</Text>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    loginView: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems:'flex-end'
    },
})

export default Authpage