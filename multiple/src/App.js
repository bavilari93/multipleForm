import React, { Component } from 'react';
import './App.css';
import Form from './componets/form'

class App extends Component {
  constructor (){
    super();
    this.state = {
      mode:'view',
      value: '',
      name: '', 
      lastname:'',
      birthday:'',
      formOne:["name","lastname","formtwo"],
      formtwo:["birthday", "sthelse", "finish"]
    };
  }

  handelMode(mode){
    console.log(mode); 
    this.setState({mode:mode});
  }

  handleChange(input){
    const target= input.target,
    value = target.value,
    name = target.name
    console.log(name)
    this.setState({
      [name]:value
    })
  }

 renderView() {
    if(this.state.mode === 'view') {
      return (
        <div>
        <Form
        inputForm= {this.state.formOne}
        value = {this.state.name}
        change ={this.handleChange.bind(this)}
        changeMode={this.handelMode.bind(this)}
        />
         </div>
      );
    } else if(this.state.mode === 'formtwo'){
      return(
        <div>
           <Form
        inputForm= {this.state.formtwo}
        value = {this.state.name}
        change ={this.handleChange.bind(this)}
        changeMode={this.handelMode.bind(this)}
        />
        </div>)

    }else {
      return (
        <div >
        this is intro
         </div>
          
      );
    }
  }

  render() {
    return (
      <div className="App">
       {this.renderView()}
      </div>
    );
  }
}

export default App;
