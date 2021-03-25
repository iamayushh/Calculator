import React from 'react';
import {View,Text, Button,StyleSheet,TouchableOpacity} from 'react-native';
import container from './Styles';
import NumeralComponent from './NumeralComponent';
class Calc extends React.Component
{
  state={
    operand1:undefined,
    operator:undefined,
    operand2:undefined,
    
    result:0
  }
  
  handle=(operand1,operator,operand2)=>
  {
    const temp=0;
    if(operator=='+')
    {
      temp =operand1+operand2;
    }
    else if(operator=='-')
    {
      temp =operand1-operand2; 
    }
    else if(operator=='*')
    {
      temp =operand1*operand2; 

    }
    else 
    {
      temp =operand1/operand2; 
    }

    
    
      this.setState(
        {
          result:{temp}
        }
      )
    
  }
    render()
    {
        return(
          <View style={container.main}>
            <View style={container.outputContainer}><Text>{this.state.result}</Text></View>
            <View style={container.inputContainer}>
              <View style={container.row1}>
              
                <TouchableOpacity style = {container.col1} > 
                 <Text onPress={()=>{this.setState({result:0})}} style={container.textclear}>Clear</Text ></TouchableOpacity >
               <TouchableOpacity onPress={()=>{this.setState({operator:'/'})}} style={[container.col2]}><Text style={{alignSelf:'center',fontSize:100}}>÷</Text></TouchableOpacity></View>
               <NumeralComponent col1='7' col2='8' col3='9' col4='-' ></NumeralComponent>
              <NumeralComponent col1='4' col2='5' col3='6' col4='+' ></NumeralComponent>
              <NumeralComponent col1='1' col2='2' col3='3' col4='=' ></NumeralComponent>
               
                



              
              
             
            </View>



          </View>
       





          
            
            
            
              
              
              
              
              
              
              
              
        )
    }
}
export default Calc;


    