import * as actions from '../actions';
import { Navigation } from '../env/constants';

const intialState = {
	currentPath: Navigation.HOME,
	hideNavBar: false,
};

const navigationReducer = function(state = intialState, action) {
	return state;
}

export default navigationReducer;