import { combineReducers } from 'redux';
import productsReducer from './products.reducer';
import navigationReducer from './navigation.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
	products: productsReducer,
	navigation: navigationReducer,
	user: userReducer,
});

export default rootReducer;