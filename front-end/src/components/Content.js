import React from 'react';
import {Route} from 'react-router-dom';
import Register from '../containers/Register';
import OurStory from '../containers/OurStory';
import Contact from '../containers/Contact';
import ImageGallery from '../containers/ImageGallery';
import Login from '../containers/Login';
import Shop from '../containers/Shop';
const Content = (props)=>{
	return(
		<div className="container-fluid content text-center">
			    <Route exact path="/" component={ImageGallery} />
      		<Route exact path="/Register" component={Register} />
          <Route exact path="/login" component={Login} />
      		<Route exact path="/our-story" component={OurStory} />
      		{/*<Route exact path="/contact" component={Contact} />*/}
          <Route path="/products/:category" component={ImageGallery} />
          <Route exact path="/shop/:productId" component={Shop} />
  	</div>

	)
}

export default Content;