export default function(state =[], action){
	console.log(action.payload)
	if(action.type == "REGISTER"){
		return action.payload;
	}
	return state
}