import axios from 'axios';

export default function(user){
	console.log(window.hostAddress);
	var thePromise = axios({
		method: 'post',
		url: window.hostAddress + '/register',
		data:user
	});
	return{
		type: "REGISTER",
		payload:thePromise
	}
}