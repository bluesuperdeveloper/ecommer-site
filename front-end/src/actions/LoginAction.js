import axios from 'axios';

export default function(loginData){
	var thePromise = axios({
		method: 'post',
		url:window.hostAddress + '/login',
		data:loginData
	});
	return{
		type:"REGISTER",
		payload: thePromise
	}
}