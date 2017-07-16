import axios from 'axios';

const fetchImages = function(categories){
	const imagePromise = axios.get(`${window.hostAddress}/:${categories}`);
	return {
		type:"GET_ALL_PRODUCTS",
		payload: imagePromise
	}
}

export default fetchImages