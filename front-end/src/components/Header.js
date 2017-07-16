import React from 'react';
import NavBarTop from '../containers/NavBarTop';
import NavBarBottom from '../containers/NavBarBottom';



const Header = ()=> {
    return (
      <div className="header">
      	<NavBarTop />
      	<div className="logo col-sm-12 text-center">
      		<a href="/"><h3>:CHOCOLATE</h3></a>
      	</div>
      	<NavBarBottom />
      </div>
    );
}

export default Header;