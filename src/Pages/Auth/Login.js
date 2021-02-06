import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import {Button} from 'native-base'
const Login = ({ navigation }) => {
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
            <Text>
                Login
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex:1, 
        backgroundColor: 'white'
    }
})

export default Login