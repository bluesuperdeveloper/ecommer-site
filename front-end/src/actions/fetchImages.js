import axios from 'axios';

const fetchImages = function(categories){
	if(categories == undefined){
		const imagePromise = axios.get(window.hostAddress);
		return {
			type:"GET_ALL_PRODUCTS",
			payload: imagePromise
		}
	}else{
		const imagePromise = axios.get(`${window.hostAddress}/products/${categories}`);
		return {
			type:"GET_A_TYPE_OF_PRODUCTS",
			payload: imagePromise
		}
	}
}

export default fetchImages