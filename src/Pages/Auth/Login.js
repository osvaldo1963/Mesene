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
import { inject, observer } from 'mobx-react'

const Login = ({ navigation, auth }) => {
    const goback = () => navigation.goBack()
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Navbutton onPress={goback}/>,
        })
    }, [navigation])
    console.log(auth.pass)
    const login = () => auth.Login(navigation)
    return (
        <View style={styles.mainView}>
            <View style={styles.holderView}></View>
            <View style={styles.contentView}>
                <SocialSection 
                    title="Log In With" />
                <Text>or</Text>
                <Authform 
                    onPress={login}
                    btnLabel="Log In" />
                <Authpage 
                    label="need an account? " 
                    btnLabel="Sign Up" />
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


export default inject("auth")(observer(Login))