import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text
} from 'react-native';

export default class HomeComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={ styles.container }>
				<Text>Home Component</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});