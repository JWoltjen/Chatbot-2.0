//Import dependencies
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk"; 
import combineReducers from './reducers'; 

//connect the application to redux devtools
import {composeWithDevTools} from 'redux-devtools-extension'; 

//Set up initial state 
const initialState = {}; 

// Import middleware 
const middleware = [thunk]

//Set up store
const store = createStore(combineReducers, initialState, composeWithDevTools(...middleware))


//export that shit
export default store; 