import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import LoginAction from '../actions/LoginAction';
import { connect } from 'react-redux';

class Login extends Component{
	constructor(props) {
		super(props);
		this.state={
			message: '',
			passwordErr: null,
			emailErr: null,
			formErr: false
		}
		this.handleLogin = this.handleLogin.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		var newMsg = '';
		console.log(nextProps.loginResponse.data)
		if(nextProps.loginResponse.data != undefined){
			if(nextProps.loginResponse.data.msg == 'emailNotExists'){
				newMsg = "email Not Exists"
				this.setState({
					message:newMsg
				})
			}
			else if(nextProps.loginResponse.data.msg == 'loginSuccess'){
				this.props.history.push('/');
			}else{
				newMsg = "Wrong Password"
				this.setState({
					message:newMsg
				})
			}
		}
	}
	handleLogin(e){
		e.preventDefault();
		var email = e.target[0].value;
		var password = e.target[1].value;
		this.props.loginAction({
			email,
			password,
		})
	}
	render(){
		console.log(this.state.message);
		return(
			<div className="register-wrapper">
				<div className="message">
					{this.state.message}
				</div>
				<Form horizontal onSubmit={this.handleLogin}>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={4}>
							Email
						</Col>
						<Col sm={8}>
							<FormControl type="email" name="email" placeholder="Email"/>
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={4}>
							Password
						</Col>
						<Col sm={8}>
							<FormControl type="password" name="password" placeholder="Password"/>
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Button type="submit">Login</Button>
					</FormGroup>
				</Form>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		loginResponse: state.registerReducer
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;