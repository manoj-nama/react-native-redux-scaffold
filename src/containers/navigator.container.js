import React, { Component } from 'react';
import {
	Navigator,
	View,
	Text,
	StatusBar,
	TouchableHighlight,
	StyleSheet,
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
			name: 'home',
			title: 'E-Commerce',
			component: HomeComponent
		};

		var NavigationBarRouteMapper = {
			LeftButton(route, navigator, index, navState) {
				if (index > 0) {
					return (
						<TouchableHighlight
							underlayColor="transparent"
							onPress={() => { if (index > 0) { navigator.pop() } } }>
							<Text style={ styles.leftNavButtonText }>Back</Text>
						</TouchableHighlight>)
				}
				else { return null }
			},
			RightButton(route, navigator, index, navState) {
				if (route.onPress) return (
					<TouchableHighlight
						onPress={ () => route.onPress() }>
						<Text style={ styles.rightNavButtonText }>
              { route.rightText || '>' }
						</Text>
					</TouchableHighlight>)
			},
			Title(route, navigator, index, navState) {
				return <Text style={ styles.title }>{route.title}</Text>
			}
		};

		return (
			<View style={{ flex: 1 }}>
				<StatusBar
					hidden={true}
					backgroundColor="blue"
					barStyle="default"
					/>
				<Navigator
					style={{ flex: 1 }}
					navigationBar={
						<Navigator.NavigationBar
							style={ styles.nav }
							routeMapper={ NavigationBarRouteMapper } />
					}
					configureScene={ this.configureScene }
					initialRoute={ initialRoute }
					renderScene={ this.renderScene } />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	nav: {
		backgroundColor: '#eee'
	},
	title: {
		fontWeight: '600',
		paddingVertical: 5,
	}
});