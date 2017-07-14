import React from 'react';
import NavBarTop from '../containers/NavBarTop';
import NavBarBottom from '../containers/NavBarBottom';



const Header = ()=> {
    return (
      <div className="header">
      	<NavBarTop />
      	<div className="logo col-sm-12 text-center">
      		<h3>:CHOCOLATE</h3>
      	</div>
      	<NavBarBottom />
      </div>
    );
}

export default Header;