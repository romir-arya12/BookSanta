import React,{Component} from 'react'
import {View,Stylesheet,ToucableOpacity,Text} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'

export default class CustomSideBaMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.drawerItems}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style={styles.logoutContanoir}>
                    <ToucableOpacity style={styles.logoutButton} 
                    onPress={()=>{this.props.navigation.navigate('Welcome Screen')
                    firebase.auth().signOut()}}>
                        <Text>Logout</Text>
                    </ToucableOpacity>
                </View>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    drawerItems:{
        flex:0.8
    },
    logoutContanoir:{
        flex:0.8,
        justifyContent:'flex-end',
        paddingBottom:30
    },
    logoutButton:{
        height:30,
        weight:'100%',
        justifyContent:'center',
        padding:10
    }
})