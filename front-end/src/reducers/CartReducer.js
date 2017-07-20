export default function(state=[], action){
	switch(action.type){
		case 'UPDATE_CART':
			return action.payload;
		case 'GET_CART':
			return action.payload;
		default:
		return state;
	}
}

