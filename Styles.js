import React from 'react';
import {StyleSheet} from 'react-native';
const container=StyleSheet.create(
    {
        main:{
            flex:0.9,
            backgroundColor:"white",
            marginRight:14,
            marginLeft:14,
            borderRadius:30
            

        },
        outputContainer:{
            flex:1,
            backgroundColor:"#A85050",
            borderWidth: 4,
            borderColor: "#654321",
            marginTop:40,
            
            

        

            

        },
        inputContainer:{
            flex:3,
            backgroundColor:"orange",
            

        },
        row1:{
            flex:0.25,
            backgroundColor:"#ecf542",
            flexDirection:'row',
            borderWidth: 4,
            borderColor: "#20232a",
        

        },
        col1:{
            flex:0.89,
            backgroundColor:'white',
           
        
        },
        col2:{
            flex:0.3,
            backgroundColor:'red',
            borderLeftWidth:4,
            borderColor: "#20232a",
            
        
        },
        textclear:{
            alignSelf:'center',fontSize:50,fontWeight:'bold',marginTop:25
        }

        

       


    }
)
export default container;