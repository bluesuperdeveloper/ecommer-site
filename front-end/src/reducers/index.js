import { combineReducers } from 'redux';
import ImageReducer from './ImageReducer';
import UserReducer from './UserReducer';

// console.log(RegisterReducer);
const rootReducer = combineReducers({
	images: ImageReducer,
	userReducer: UserReducer
})

export default rootReducer;