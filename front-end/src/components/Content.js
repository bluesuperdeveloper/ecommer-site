import React from 'react';
import {Route} from 'react-router-dom';
import Register from '../containers/Register';
import OurStory from '../containers/OurStory';
import Contact from '../containers/Contact';
import ImageGallery from '../containers/ImageGallery';
import Login from '../containers/Login';
const Content = (props)=>{
	return(
		<div className="container-fluid content text-center">
			    <Route path="/" component={ImageGallery} />
      		<Route exact path="/Register" component={Register} />
          <Route exact path="/login" component={Login} />
      		{/* <Route exact path="/our-story" component={OurStory} /> */}
      		{/*<Route exact path="/contact" component={Contact} />*/}
          <Route path="/products/:category" component={ImageGallery} />
  	</div>

	)
}

export default Content;