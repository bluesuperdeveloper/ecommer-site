import { combineReducers } from 'redux';
import ImageReducer from './ImageReducer';
import RegisterReducer from './RegisterReducer';

// console.log(RegisterReducer);
const rootReducer = combineReducers({
	images: ImageReducer,
	registerReducer: RegisterReducer
})

export default rootReducer;