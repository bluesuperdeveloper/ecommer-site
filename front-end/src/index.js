import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers/index';
import reduxPromise from 'redux-promise';

const theStore = applyMiddleware(reduxPromise)(createStore)(RootReducer)
ReactDOM.render(<Provider store={theStore}>
	<div>
		<App />
	</div>
	</Provider>, document.getElementById('root'));
