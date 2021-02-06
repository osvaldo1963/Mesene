import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'native-base'

const SocialSection = ({title}) => {
    return(
        <View style={styles.socialView}>
            <Text>{title}</Text>
            <View style={styles.socialBtnView}>
                <Button rounded style={styles.socialBtn}>
                    <Text style={styles.textColor}>Facebook</Text>
                </Button>
                <Button rounded style={styles.socialBtn}>
                    <Text style={styles.textColor}>Google</Text>
                </Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({ 
    socialView: {
        flex: 2, 
        justifyContent: 'space-around'
    },
    socialBtnView: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    }, 
    socialBtn: { 
        width: '48%', 
        justifyContent: 'center' 
    },
    textColor: { color: 'white'}
})

export default SocialSection