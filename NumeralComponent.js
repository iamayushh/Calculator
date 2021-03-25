import React from 'react';
import './App';

import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import Calc from './App';
//const NumeralComponent =(props)=>{
    class NumeralComponent extends Calc
    {
        

        
      render()
      {
          const a=10;
          var b=this.props.col2;
          var c=this.props.col3;
        return(
            <View style={styles.main}>
                <TouchableOpacity onPress={()=>{this.setState({operand1:a})}} style={styles.box1}><Text style={styles.textt}>{this.props.col1}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.box2}><Text style={styles.textt}>{this.props.col2}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.box3}><Text style={styles.textt}>{this.props.col3}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.box4}><Text style={styles.textt}>{this.props.col4}</Text></TouchableOpacity>
                
            </View>
        )
    }
}
const styles=StyleSheet.create({
    main:{
        flex:0.25,
            backgroundColor:"#ecf542",
            flexDirection:'row',
            borderWidth: 4,
            borderColor: "#20232a",

            
        },
        box1:{
            flex:0.25,
            backgroundColor:'white',
            borderRightWidth:4,
            borderColor: "#20232a",

            

        },
        box2:{
            flex:0.25,
            backgroundColor:'white',
            borderRightWidth:4,
            borderColor: "#20232a",


        },
        box3:{
            flex:0.25,
            backgroundColor:'white',
            borderRightWidth:4,
            borderColor: "#20232a",

        },
        box4:{
            flex:0.25,
            backgroundColor:'red',
        },
        textt:{
            alignSelf:'center',
            fontWeight:'bold',
            fontSize:50,
            marginTop:20

        
        }
}
)
export default NumeralComponent;