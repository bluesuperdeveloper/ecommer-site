import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


// make this into an container so that it will know when user log in
class NavBarTop extends Component{
	render(){
		return (
			<div className="container top-nav-bar">
				<div className="col-sm-12 text-center">
					<ul>
						<Link to="/our-story"><li className="top-nav-item">OUR STORY</li></Link>
						<Link to="/contact"><li className="top-nav-item">CONTACT</li></Link>
						<Link to="/register"><li className="top-nav-item">REGISTER</li></Link>
						<Link to="/login"><li className="top-nav-item">Log In</li></Link>
						<Link to="/cart"><li className="top-nav-item">({totalItems}) items in your cart | (${totalPrice})</li></Link>
					</ul>
				</div>
			</div>

		)
	}
}

function mapStateToProps(state){
	return{
		registerInfo: state.registerReducer,
		cartInfo: state.cartReducer
	}
}

export default connect(mapStateToProps)(NavBarTop);