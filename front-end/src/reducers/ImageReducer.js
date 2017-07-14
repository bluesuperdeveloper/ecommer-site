export default function(state=[], action){
	switch(action.type){
		case "GET_ALL_PRODUCTS":
			// console.log(action.payload);
			return action.payload;
		default:
			return state;
	}
}