import React,{Component} from 'react'
import {View,Stylesheet,Text,FlatList,TouchableOppacity} from 'react-native'
import {ListItem} from 'react-native-elements'
import firebase from 'firebase'
import db from '../config'

export default class BookDonateScreen extends Component{
    constructor(){
        super();
        this.state={requestedBookList:[]}
        this.requestRef=null

    }
    getRequestedBookList=()=>{
        this.requestRef=db.collection('requested_books')
        .onSnapshot((snapshot)=>{
            earRequestedBookList:requestedBookList
        })
    }
    componentDidMount(){
        this.getRequestedBookList()
    }
    componentWillMount(){
        this.requestRef()
    }
    keyExtractor=(item,index)=>{index.toString()}
    renderItem=({item,i})=>{
        return(
            <ListItem
            key={i}
            tittle={item.book_name}
            subTittle={item_reason_to_request}
            tittleStyle={{color:'black',fontWeight:'bold'}}
            rightElement={
                <TouchableOppacity style={styles.button}>
                    <Text style={{color:'#ffff'}}>View</Text>
                </TouchableOppacity>
            }
            bottemDivider/>
        )
    }
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader tittle='Donate Books'/> 
                <View style={styles.subContianor}>
                    {this.state.requestedBooksList.length===0
    ?(
        <View>
            <Text style={{fontSize:20}}>List Of All Requested Books</Text>
        </View>
    )
:(
    <FlatList keyExtractor={this.keyExtractor}
data={this.state.requestedBookList}
renderItem={this.renderItem}
 />
)
}
            </View>
            </View>
            
        )
    }
}

constStyles=styleSheet.create({
    subContianor:{
        flex:1,
        fontSize:20,
        JustifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:100,
        height:30,
        JustifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff5722",
        shadowColor:'#0000',
        shadowOfset:{width:0,height:8}
    },
    
})