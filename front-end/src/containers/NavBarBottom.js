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
						<Link to="/products/apparel"><li className="bottom-nav-item">APPARELS</li></Link>
						<Link to="/products/accessories"><li className="bottom-nav-item">ACCESSORIES</li></Link>
						<Link to="/products/onsale"><li className="bottom-nav-item">ON SALE</li></Link>
					</ul>
				</div>
			</div>

		)
	}
}

export default NavBarBottom;