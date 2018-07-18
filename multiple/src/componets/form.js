import React , {Component} from 'react'; 

class Form extends Component{

	render(){
		return(
			<div className="form"> 
				<input 
				type="text"
				name={this.props.inputForm[0]}
				placeholder= {this.props.inputForm[0]}
				value={this.props.value}
				onChange={e=>{this.props.change(e)}}
				/>

				<div className="button" onClick={()=>{this.props.changeMode(this.props.inputForm[2])}}>
				<p>next</p></div>
			</div>
			)
	}
}

export default Form;