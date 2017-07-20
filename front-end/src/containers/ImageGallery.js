import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import fetchImages from '../actions/fetchImages';
import Images from '../reducers/ImageReducer';

class ImageGallery extends Component{
	constructor(props) {
		super(props);
	}
	componentWillReceiveProps(nextProps) {
		if(this.props.match.params != undefined){
			if(this.props.match.params.category != nextProps.match.params.category){
				if(nextProps.match.params.category == undefined){
					this.props.fetchImages();
				}else{
					this.props.fetchImages(nextProps.match.params.category);
				}
			}
		}
	}
	componentDidMount() {
		console.log("pass");
		console.log(this.props.match.params.category);
		if(this.props.match.params.category === undefined){
			this.props.fetchImages();
		}else{
			this.props.fetchImages(this.props.match.params.category);
		}

	}
	render(){
		const imageArr = [];
		console.log(this.props.images);
		if(this.props.images.length < 1){
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
						<Link to={`/shop/${productInfo.id}`}><span className="img-text">QUICK VIEW</span></Link>
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