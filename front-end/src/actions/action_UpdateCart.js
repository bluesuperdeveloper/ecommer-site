import axios from axios;

export default function UpdateCart(userData, token){
	var thePromise = axios({
		method:'POST',
		url: window.hostAddress + '/updateCart',
		data:{
			productCode: userData,
			token: token
		}
	});
	return {
		type: "UPDATE_CART",
		payload: thePromise
	}
}