import React , {Component} from 'react'; 

class Form extends Component{

	render(){
		return(
			<div> 
			<input 
			type="text"
			name={this.props.inputForm[0]}
			placeholder= {this.props.inputForm[0]}
			value={this.props.value}
			onChange={e=>{this.props.change(e)}}
			/>


			</div>

			)
	}
}

export default Form;