import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import RegisterAction from '../actions/RegisterAction';
import { connect } from 'react-redux';

class Register extends Component{
	constructor(props) {
		super(props);
		this.state={
			message: '',
			nameErr: null,
			emailErr: null,
			formErr: false
		}
		this.handleRegistration = this.handleRegistration.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		var newMsg = '';
		if(nextProps.registerResponse.data != undefined){
			if(nextProps.registerResponse.data.msg == 'existedUser'){
				newMsg = "Username existed"
				this.setState({
					message:newMsg
				})
			}
			if(nextProps.registerResponse.data.msg == 'userInserted'){
				this.props.history.push('/');
			};
		}
	}
	handleRegistration(e){
		e.preventDefault();
		var name = e.target[0].value;
		var email = e.target[1].value;
		var password = e.target[2].value;
		var type = e.target[3].value;
		var city = e.target[4].value;
		var state = e.target[5].value;
		var salesrep = e.target[6].value;
		var error = false;
		if(name.length < 3){
			var nameErr = "error";
			error=true;
		}else{
			var nameErr = "success";
		}
		if(email.length < 3){
			var emailErr = "error";
			error=true;
		}else{
			var emailErr="success";
		}

		if(error){
			this.setState({
				formErr:true,
				emailErr: emailErr,
				nameErr:nameErr
			})
		}else{
			this.props.registerAction({
				name,
				email,
				password,
				type,
				city,
				state,
				salesrep
			})
		}
	}
	render(){
		console.log(this.state.nameErr)
		return(
			<div className="register-wrapper">
				<div className="message">
					{this.state.message}
				</div>
				<Form horizontal onSubmit={this.handleRegistration}>
					<FormGroup controlId="formHorizontalName" validationState={this.state.nameErr}>
						<Col componentClass={ControlLabel} sm={4}>
							Name
						</Col>
						<Col sm={8} md={4}>
							<FormControl type="text" placeholder="Full Name"/>
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName" validationState={this.state.emailErr}>
						<Col componentClass={ControlLabel} sm={4}>
							Email
						</Col>
						<Col sm={8} md={4}>
							<FormControl type="email" name="email" placeholder="Email"/>
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={4}>
							Password
						</Col>
						<Col sm={8} md={4}>
							<FormControl type="password" name="password" placeholder="Password"/>
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={4}>
							City
						</Col>
						<Col sm={8} md={4}>
						<FormControl type="text" name="city" placeholder="City"/>
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={4}>
							State
						</Col>
						<Col sm={8} md={4}>
							<FormControl type="text" name="state" placeholder="State"/>
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={4}>
							SalesRep
						</Col>
						<Col sm={8} md={4}>
							<FormControl type="number" name="salesrep" placeholder="Number"/>
						</Col>
					</FormGroup>
					<FormGroup controlId="formAccountSelect">
			            <Col componentClass={ControlLabel} sm={4}>
			                Account Type
			            </Col>
			            <Col sm={8} md={4}>
			                <FormControl componentClass="select" placeholder="formAccountSelect">
			                    <option value="customer">Customer</option>
			                    <option value="employee">Employee</option>
	                		</FormControl>    
            			</Col>
            		</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col smOffset={2} sm={10}>
							<Button bsStyle="primary" bsSize="small" type="submit">
								Submit
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		registerResponse: state.userReducer
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);