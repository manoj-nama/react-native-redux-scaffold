'use strict';

import React, {
	Component,
} from 'react';
import {
	Text,
	View,
} from 'react-native';

import { containerStyle as styles } from '../styles';

import Nav from './navigator.container';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Nav />
		)
	}
}