import react,{Component} from 'react'
import {View,TextInput,KeybaordAviodingView,StyleSheet,TouchableOppacity,Alert} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class BookRequestScreen extends Component{
    constructor(){
        super();
        this.state={userId=firebase.auth().currentUser.email,bookName:'', reasonToRequest:'',}
    }
    createUnquieId(){
        return Math.random().toString(36).substring(7)
    }
}