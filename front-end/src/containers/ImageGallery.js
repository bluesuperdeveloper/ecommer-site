import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchImages from '../actions/fetchImages';
import Images from '../reducers/ImageReducer';

class ImageGallery extends Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchImages();

	}
	render(){
		const imageArr = [];
		if(this.props.images == []){
			return imageArr;
		}else{
			this.props.images.map((img,index)=>{
				imageArr.push(
					<div key={index} className="img-holder">
						<img src={img}/>
					</div>
				)
			})
		}
		return(
			<div className="container image-gallery">
				{imageArr}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		images: state.images
	}
}
function mapDispatchToProps(dispatch){
	var dispatchedAction = {
		fetchImages: fetchImages
	}
	return bindActionCreators(dispatchedAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);