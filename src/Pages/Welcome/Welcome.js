import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet, 
} from 'react-native'
import { Button } from 'native-base'
const bg = require('../../../Images/Welcome/Bg.png')
const Welcome = ({navigation}) => {
  const navigateTo = (screen) => navigation.navigate(screen)
  return(
    <ImageBackground source={bg} style={styles.bg}>
      <View style={styles.mainView}>
        <View style={styles.welcomeView}>
          <View style={styles.textView}>
            <Text style={styles.welText}>Welcome</Text>
            <Text style={styles.messageText}>Message and Share without worrying about privicy</Text>
          </View>
          <View style={styles.btnView}>
            <Button 
              onPress={() => navigateTo('Signup')}
              rounded 
              style={styles.signupBtn}>
              <Text style={{color: 'white'}}>Sign Up</Text>
            </Button>
            <Button 
              onPress={() => navigateTo('Login')}
              transparent 
              style={styles.loginBtn}>
              <Text>Login</Text>
            </Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  bg: {
    flex: 1, 
    width: null,
    height: null,
  }, 
  mainView: {
    flex:1, 
    justifyContent: 'center'
  },
  welcomeView: {
    alignSelf: 'center',
    height: '60%', 
    width: '80%',
    alignContent: 'center',
    justifyContent: 'center', 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 15, 
  },
  textView: {
    flex:2 ,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  
  },
  welText: {
    fontSize: 22,
    fontWeight: 'normal'
  }, 
  messageText: {
    fontSize: 14, 
    fontWeight: '100',
    textAlign: 'center'
  },
  btnView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  signupBtn: {
    backgroundColor: '#1DD2C1', 
    width: '80%', 
    justifyContent: 'center', 
    alignItems: 'center',
    height: 50,
    alignSelf: 'center'
  }, 
  loginBtn: {
    alignSelf: 'center',
    width: '80%', 
    justifyContent: 'center', 
    alignItems: 'center',
    height: 50,
  }
})
export default Welcome