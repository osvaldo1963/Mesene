import React from 'react'
import {
    Text,
    View, 
    StyleSheet,
    
} from 'react-native'
import {Button, Input} from 'native-base'
import { TouchableHighlight } from 'react-native-gesture-handler'
const Signup = ({ navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button iconLeft onPress={() => {navigation.goBack()}} style={{backgroundColor: '#F2F5F8'}}>
                   <Text style={{padding: 15}}>back</Text>
                </Button>
            ),
        })
    }, [navigation])
    return (
        <View style={styles.mainView}>
            <View style={styles.holderView}></View>
            <View style={styles.contentView}>
                <View style={styles.socialView}>
                    <Text>Sign Up With</Text>
                    <View style={styles.socialBtnView}>
                        <Button rounded style={styles.socialBtn}>
                            <Text style={styles.textColor}>Facebook</Text>
                        </Button>
                        <Button rounded style={styles.socialBtn}>
                            <Text style={styles.textColor}>Google</Text>
                        </Button>
                    </View>
                </View>
                <Text>Or</Text>
                <View style={styles.emailView}>
                    <Button rounded style={styles.emailBtn}>
                        <Text style={styles.textColor}>Email</Text>
                    </Button>
                </View>
                <View style={styles.loginView}>
                    <Text>already member?</Text>
                    <TouchableHighlight>
                        <Text>Login</Text>
                    </TouchableHighlight>
                </View>
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
        alignSelf: 'stretch',
        height:'50%',
        padding: 15
    }, 
    socialView: {
        flex: 1, 
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
    emailView: {
        flex: 1,
        flexDirection: 'row', 
       
    },
    emailBtn: {
        width: '100%',
        justifyContent: 'center' ,
        backgroundColor: '#1DD2C1', 
        alignSelf: 'center'
    },
    loginView: {
        flex:1,
        flexDirection: 'row'
    },
    textColor: { color: 'white'}
})


export default Signup