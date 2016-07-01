import { combineReducers } from 'redux';
import productsReducer from './products.reducer';
import navigationReducer from './navigation.reducer';

const rootReducer = combineReducers({
	products: productsReducer,
	navigation: navigationReducer,
});

export default rootReducer;