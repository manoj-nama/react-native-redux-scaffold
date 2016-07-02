'use strict';

import React, {
	Component,
} from 'react';
import {
	Text,
	View,
} from 'react-native';

import { containerStyle as styles } from '../styles';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to E-Comm!
				</Text>
			</View>
		)
	}
}