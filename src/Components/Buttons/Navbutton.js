import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'native-base'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Navbutton = ({ onPress }) => {
    return(
        <Button iconLeft onPress={onPress} style={style.btnView}>
            <FontAwesomeIcon icon={faChevronLeft} color="gray" style={style.icon} />
        </Button>
    )
}
const style = StyleSheet.create({
    btnView: {
        backgroundColor: '#F2F5F8',
        borderRadius: 15, 
    }, 
    icon: {
        marginLeft: 17, 
        marginRight: 17
    }
})
export default Navbutton