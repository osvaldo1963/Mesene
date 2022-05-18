import {action, makeObservable, observable, computed, makeAutoObservable } from 'mobx'
import au from '@react-native-firebase/auth'
import RealmApp from '../Util/Realapp'
'3b99426f-d09f-4728-9d59-726ce8aeaa05'

class auth {
    currentUser = {}
    email = ""
    pass  = ""
    constructor() {
       makeAutoObservable(this)
    }
    //=====setter & getters
    setEmail(value) {
        this.email = value
    }
    get getEmail() {
        return this.email
    }

    setPass(value) {
        this.pass = value
    }
    get getPass() {
        return this.pass
    }

    setCurrentUser(value) {
        this.currentUser = value 
    }
    get getCurrentUser() {
        return this.currentUser
    }
    //======= methods =============
    async Login(navigation) {
        try {
            const user = await au()
                .signInWithEmailAndPassword(this.getEmail, this.getPass)
            this.clean()
            console.log(user)
        } catch(error) {
            console.log(error)
        }
    }
    async SignUp(navigation) {
        try {
            
            const user = await au()
                .createUserWithEmailAndPassword(this.getEmail, this.getPass)
            this.clean()
            navigation.navigate("Hometab")
            console.log(user)
        } catch(error) {
            console.log(error)
        }
    }
    clean() {
        this.setEmail('')
        this.setPass('')
    }
}
const Auth = new auth()
export default Auth
