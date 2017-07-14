import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// make this into an container so that it will know when user log in
class NavBarTop extends Component{
	render(){
		return (
			<div className="container top-nav-bar">
				<div className="col-sm-12 text-center">
					<ul>
						<Link to="/our-story"><li className="top-nav-item">OUR STORY</li></Link>
						<Link to="/blog"><li className="top-nav-item">BLOG</li></Link>
						<Link to="/contact"><li className="top-nav-item">CONTACT</li></Link>
						<Link to="/register"><li className="top-nav-item">REGISTER</li></Link>
						<Link to="/login"><li className="top-nav-item">Log In</li></Link>
					</ul>
				</div>
			</div>

		)
	}
}

export default NavBarTop;