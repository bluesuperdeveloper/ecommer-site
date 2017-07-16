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
		// console.log(this.props.match.params);
		if(this.props.match.params.category == 'category'){
			this.props.fetchImages(this.props.match.params.category);
		}

	}
	render(){
		const imageArr = [];
		if(this.props.images.length < 1){
			// console.log(this.props.images);
			imageArr.push(<div key='1' className="img-holder">
				<img src='./images/logo.jpg'/>
				</div>);
		}
		else{
			// console.log(this.props.images.data);
			this.props.images.data.map((productInfo,index)=>{
				imageArr.push(
					<div key={index} className="img-holder">
						<img src={productInfo.img}/>
						<span className="img-overlay"></span>
						<span className="img-text desc">{productInfo.productName}</span>
						<span className="img-text">QUICK VIEW</span>
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