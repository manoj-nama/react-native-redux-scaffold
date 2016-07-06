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

class AppContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Nav />
		)
	}
}

const mapStateToProps = function (state) {
	return state;
}

const App = connect(mapStateToProps)(AppContainer);
export default App;