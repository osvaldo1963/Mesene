import React from 'react'
import { Text } from 'react-native'
import { Button } from 'native-base'

const Navbutton = ({ onPress }) => {
    return(
        <Button iconLeft onPress={onPress} style={{backgroundColor: '#F2F5F8'}}>
            <Text style={{padding: 15}}>back</Text>
        </Button>
    )
}
export default Navbutton