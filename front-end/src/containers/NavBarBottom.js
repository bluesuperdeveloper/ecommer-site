import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// this doesn't need to be a container, move it
class NavBarBottom extends Component{
	render(){
		return (
			<div className="container bottom-nav-bar">
				<div className="col-sm-12 text-center">
					<ul>
						<Link to="/"><li className="bottom-nav-item">ALL</li></Link>
						<Link to="/products/:apparel"><li className="bottom-nav-item">APPAREL</li></Link>
						<Link to="/products/:eyeware"><li className="bottom-nav-item">EYEWARE</li></Link>
						<Link to="/products/:shoes"><li className="bottom-nav-item">SHOES</li></Link>
					</ul>
				</div>
			</div>

		)
	}
}

export default NavBarBottom;