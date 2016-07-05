import React, { Component } from 'react';
import {
	Navigator,
	View,
	Text,
} from 'react-native';

import HomeComponent from '../components/home.component';

export default class Nav extends Component {
	constructor(props) {
		super(props);
	}

	renderScene(route, navigator) {
		return <route.component navigator={navigator} {...route.passProps} />
	}

	configureScene(route, routeStack) {
    switch (route.type) {
			case 'Modal':
				return Navigator.SceneConfigs.FloatFromBottom;
			default:
				return Navigator.SceneConfigs.PushFromRight
		}
	}

	render() {
		const initialRoute = {
			name: 'Home',
			component: HomeComponent
		};
		return (
			<Navigator
				style={{ flex: 1 }}
				configureScene={ this.configureScene }
				initialRoute={ initialRoute }
				renderScene={ this.renderScene } />
		);
	}
}