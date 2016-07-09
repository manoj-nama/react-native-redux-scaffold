import * as actions from '../actions';
import { Navigation } from '../env/constants';

const intialState = {
	currentPath: Navigation.HOME,
	hideNavBar: false,
	showDrawer: false,
};

const navigationReducer = function(state = intialState, action) {
	switch (action.type) {
		case actions.TOGGLE_DRAWER:
			return Object.assign({}, state, { showDrawer: !!action.drawerState })
	}
	return state;
}

export default navigationReducer;