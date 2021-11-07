import { createStore, combineReducers } from 'redux';
import { currentUserReducer } from './currentUserReducer';
import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({
	currentUser: currentUserReducer,
	modal: modalReducer,
});

export const store = createStore(rootReducer);