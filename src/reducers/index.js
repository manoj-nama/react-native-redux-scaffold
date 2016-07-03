import { combineReducers } from 'redux';
import productsReducer from './products.reducer';
import navigationReducer from './navigation.reducer';
import userReducer from './user.reducer';
import cartReducer from './cart.reducer';
import filterReducer from './filter.reducer';

const rootReducer = combineReducers({
	products: productsReducer,
	navigation: navigationReducer,
	user: userReducer,
	cart: cartReducer,
	filter: filterReducer,
});

export default rootReducer;