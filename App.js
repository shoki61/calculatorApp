import React from "react";
import {View, Text, TextInput, Image,TouchableOpacity,StyleSheet,Dimensions} from "react-native";


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {value:""}
  }
  resultValue = (v)=>{
    this.setState({ 
      value: `${this.state.value}${v}`
    })
  }

  clearResult = ()=>{
    this.setState({
      value: ""
    })
  }

  render(){
    return (
     <View style={style.container}>

        <View style={style.resultContainer}>
         <Text style={style.result}>{this.state.value}</Text>
        </View>

        <View style={style.buttonContainer}>
          <View style={style.buttonRow}>
            <TouchableOpacity onPress={()=>this.clearResult()} style={[style.button,style.backGrey]}><Text style={[style.buttonText,style.colorBlack]}>AC</Text></TouchableOpacity>
            <TouchableOpacity style={[style.button,style.backGrey]}><Text style={[style.buttonText,style.colorBlack]}>±</Text></TouchableOpacity>
            <TouchableOpacity style={[style.button,style.backGrey]}><Text style={[style.buttonText,style.colorBlack]}>%</Text></TouchableOpacity>
            <TouchableOpacity style={[style.button,style.backOrange]}><Text style={style.buttonText}>÷</Text></TouchableOpacity>
          </View>

          <View style={style.buttonRow}>
            <TouchableOpacity onPress={()=>this.resultValue(7)} style={style.button}><Text style={style.buttonText}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.resultValue(8)} style={style.button}><Text style={style.buttonText}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.resultValue(9)} style={style.button}><Text style={style.buttonText}>9</Text></TouchableOpacity>
            <TouchableOpacity style={[style.button,style.backOrange]}><Text style={style.buttonText}>×</Text></TouchableOpacity>
          </View>

          <View style={style.buttonRow}>
            <TouchableOpacity onPress={()=>this.resultValue(4)} style={style.button}><Text style={style.buttonText}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.resultValue(5)} style={style.button}><Text style={style.buttonText}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.resultValue(6)} style={style.button}><Text style={style.buttonText}>6</Text></TouchableOpacity>
            <TouchableOpacity style={[style.button,style.backOrange]}><Text style={style.buttonText}>-</Text></TouchableOpacity>
          </View>

          <View style={style.buttonRow}>
            <TouchableOpacity onPress={()=>this.resultValue(1)} style={style.button}><Text style={style.buttonText}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.resultValue(2)} style={style.button}><Text style={style.buttonText}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.resultValue(3)} style={style.button}><Text style={style.buttonText}>3</Text></TouchableOpacity>
            <TouchableOpacity style={[style.button,style.backOrange]}><Text style={style.buttonText}>+</Text></TouchableOpacity>
          </View>

          <View style={style.buttonRow}>
            <TouchableOpacity onPress={()=>this.resultValue(0)} style={style.button0}><Text style={style.buttonText}>0</Text></TouchableOpacity>
            <TouchableOpacity style={style.button}><Text style={style.buttonText}>,</Text></TouchableOpacity>
            <TouchableOpacity style={[style.button,style.backOrange]}><Text style={style.buttonText}>=</Text></TouchableOpacity>
          </View>
        </View>







     </View>
    );

  }
}

const style = StyleSheet.create({
  container:{
    width:w,
    minHeight:h,
    padding:5,
    flex:1,
    backgroundColor: "#191c21"
    },
  resultContainer:{
    width:w,
    height:400,
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  result:{
    fontSize:200,
    color:'white',
    paddingRight:40,
  },
  buttonContainer:{
    paddingTop:15
  },
  buttonText:{
    fontSize:70,
    color:'#c8c9cc'
  },
  button:{
    width:150,
    height:150,
    borderRadius:100,
    backgroundColor:"#303133",
    alignItems:'center',
    justifyContent:'center',
    margin:10,
  },
  button0:{
    width:323,
    height:150,
    borderRadius:100,
    backgroundColor:"#303133",
    alignItems:'flex-start',
    justifyContent:'center',
    paddingLeft:55,
    margin:10,
  },
  buttonRow:{
    flexDirection:'row',
    width:w,
    justifyContent:'space-evenly'
  },
  backGrey:{
    backgroundColor:'grey',
  },
  colorBlack:{
    color:"#282829"
  },
  backOrange:{
    backgroundColor:'#c4770a'
  }
  });


export default Calculator;