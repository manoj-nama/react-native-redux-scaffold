// User related actions
export const LOGIN = 'LOGIN';


// Product related Actions
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECIEVE_PRODUCTS = 'RECIEVE_PRODUCTS';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const DESELECT_PRODUCT = 'DESELECT_PRODUCT';


// Navigator related Actions
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';

export function openCloseDrawer(drawerState) {
	return {
		type: TOGGLE_DRAWER,
		drawerState
	}
}

export function toggleNavbar(navbarState) {
	return {
		type: TOGGLE_NAVBAR,
		navbarState
	}
}