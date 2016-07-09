'use strict';

import React, {
	Component,
} from 'react';
import {
	Text,
	View,
} from 'react-native';
import { connect } from 'react-redux';
import { containerStyle as styles } from '../styles';

import Nav from './navigator.container';
import Drawer from './drawer.container';

class AppContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Nav />
				<Drawer />
			</View>
		)
	}
}

const mapStateToProps = function (state) {
	return state;
}

const App = connect(mapStateToProps)(AppContainer);
export default App;