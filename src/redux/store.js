import { createStore, combineReducers } from 'redux';
import filtersReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;