import react, { KeyboardAvoidingViewComponent } from 'react-native'
import {View,Text,Image,StyleSheet,TouchableOpacity,TextInput,Alert,Modal,ScrollView} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import { Component } from 'react'

export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={
        emailId:'',
        password:'',
        firstName:'',
        lastName:'',
        address:'',
        contact:'',
        confirmPassword:'',
        isModalVisable:'false'
        }
    }
    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert('sucessfuly logged in')
        })
        .catch((error)=>{
            var error = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }
    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert('User added to system')
        })
        .catch((error)=>{
            var error = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }
    showModal=()=>{
        return(
            <Modal animationType='fade'
            transparent={true}
            visable={this.state.isModalVisable}>
                <View style={styles.modalContainor}>
                    <ScrollView style={{width:'100%'}}>
                            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                                            <Text style={styles.ModalTitle}>
                                                Registration
                                            </Text> 
                                            <TextInput style={styles.FormTextInput}
                                            placeholder={'first name'}
                                            maxLength={8}
                                            onChangeText={(text)=>{this.setState({firstName:text})}}
                                            />
                                            <TextInput style={styles.FormTextInput}
                                            placeholder={'last name'}
                                            maxLength={8}
                                            onChangeText={(text)=>{this.setState({lastName:text})}}
                                            />
                                             <TextInput style={styles.FormTextInput}
                                            placeholder={'contact'}
                                            maxLength={8}
                                            keyboardType={'numeric'}
                                            onChangeText={(text)=>{this.setState({contact:text})}}
                                            />
                                            <TextInput style={styles.FormTextInput}
                                            placeholder={'address'}
                                            multiline={2}
                                            onChangeText={(text)=>{this.setState({address:text})}}
                                            />
                                             <TextInput style={styles.FormTextInput}
                                            placeholder={'email address'}
                                            keyboardType={'email-address'}
                                            onChangeText={(text)=>{this.setState({emailId:text})}}
                                            />
                                             <TextInput style={styles.FormTextInput}
                                            placeholder={'password'}
                                            secureTextEntry={true}
                                            onChangeText={(text)=>{this.setState({password:text})}}
                                            />
                                            <TextInput style={styles.FormTextInput}
                                            placeholder={'confirm password'}
                                            secureTextEntry={true}
                                            onChangeText={(text)=>{this.setState({confirmPassword:text})}}
                                            />
                                            <View style={styles.ModalBackButton}>
                                                <TouchableOpacity style={styles.registerButton}
                                                onPress={()=>{this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}}>
                                                            <Text style={styles.registarButtonText}>

                                                            </Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.MoralBackButton}>
                                                <TouchableOpacity style={styles.cancelButton}
                                                onPress={()=>{this.setState({'isModalVisable':false})}}>
                                                    <Text style={{color:'#ff5722'}}>
                                                        Cancel
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                            </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>

        )
    }
    render(){
        return(
            <View style={styles.containor}>
                <View>
                    {this.showModal()}
                </View>
                <View style={styles.profileContainor}>
                    <Text style={styles.title}>Book Santa</Text>    
                </View>
                    <View style={styles.buttonContainor}>
                        <TextInput style={styles.LoginBox}
                        placeholder='example@123.com'
                        keyboardType='email-address'
                        onChangeText={((text)=>{
                            this.setState({emailId:text})
                        })}/>
                         <TextInput style={styles.LoginBox}
                        placeholder='password'
                        placeholderTextColor='#ffff'
                        onChangeText={((text)=>{
                            this.setState({emailId:text})
                        })}/>
                        <TouchableOpacity styles={[styles.button,{margin:20, marignTop:20}]}
                        onPress={()=>{this.userLogin(this.state.emailId,this.state.password)}}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity styles={[styles.button,{margin:20, marignTop:20}]}
                        onPress={()=>{this.setState({isModalVisable:true})}}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    },
    keyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalTitle:{
        justifyContent:'center',
        alignItems:'center',
        fontsinze:30,
        color:'#ff522',
        margin:50
    },
    modalContainor:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffff',
        marginRight:30,
        marignLeft:30,
        marginTop:80,
        marginBottom:80
    },
    formTextInput:{
        width:'75%',
        hieght:35,
        alignSelf:'center',
        borderColor:'#ffav91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    registerButton:{
        width:200,
        height:40,
        alignContent:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:20
    },
    registarButtonText:{
        color:'#ff57w2',
        fontSize:50,
        fontWeight:'bold'
    },
    cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5
    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontsize:20
    },
    button:{
        wdith:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'#ff9800',
        shadowColor:'#0000',
        shadowOffset:{wdith:0, height:8},
        shadowOpacity:0.30,
        shadowRaduis:10.32,
        elevation:16,
        padding:10
    }
  })