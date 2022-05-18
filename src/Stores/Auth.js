import { makeAutoObservable } from 'mobx'
import au from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
'3b99426f-d09f-4728-9d59-726ce8aeaa05'

class auth {
    currentUser = {}
    email = ""
    pass  = ""
    userCollection = firestore().collection('Users')
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
            this.setCurrentUser(user)
            this.clean()
            navigation.navigate("Hometab")
        } catch(error) {
            console.log(error)
        }
    }
    async SignUp(navigation) {
        try {
            const user = await au()
                .createUserWithEmailAndPassword(this.getEmail, this.getPass)
            const {
                email, 
                uid, 
            } = user.user
            this.setCurrentUser(user)
            await this.addUser({
                email, 
                auth_id: uid
            })
            this.clean()
            navigation.navigate("Hometab")
        } catch(error) {
            console.log(error)
        }
    }
    checkSession(navigation) {
        if(au().currentUser){
            navigation.navigate("Hometab")
        }
    }
    addUser(user) { 
        return new Promise((resolve, reject) => {
            this.userCollection.add(user)
                .then((result) => resolve(result))
                .catch((error) => reject(error))
        })
    }

    clean() {
        this.setEmail('')
        this.setPass('')
    }
   
}
const Auth = new auth()
export default Auth
