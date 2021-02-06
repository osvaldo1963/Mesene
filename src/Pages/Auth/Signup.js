import React from 'react'
import {
    Text,
    View, 
    StyleSheet,
} from 'react-native'
import SocialSection from '../../Components/Buttons/SocialSection'
import Authform from '../../Components/Forms/Authform'
import Authpage from '../../Components/Buttons/Authpage'
import Navbutton from '../../Components/Buttons/Navbutton'

const Signup = ({ navigation }) => {
    const goback = () => navigation.goBack()
    const navigateto = () => navigation.navigate("Hometab")
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Navbutton onPress={goback} />,
        })
    }, [navigation])
    return (
        <View style={styles.mainView}>
            <View style={styles.holderView}></View>
            <View style={styles.contentView}>
                <SocialSection 
                    title="Sign up With" />
                <Text>Or</Text>
                <Authform 
                    onPress={navigateto}
                    btnLabel="Sign up" />
                <Authpage 
                    label="already member? " 
                    btnLabel="Login" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: { 
        flex: 1,
        backgroundColor: 'white'
    }, 
    holderView: {
        flex:1 ,
    },
    contentView: {
        flex: 3,
        alignSelf: 'stretch',
        height:'50%',
        padding: 15
    }, 
})


export default Signup