import axios from 'axios';

export default function GetCart(token){
	var thePromise = axios({
		method:"POST",
		url: window.hostAddress + '/getCart',
		data:token
	})
	return{
		type: 'GET_CART',
		payload: thePromise
	}
}