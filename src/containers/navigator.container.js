import React, { Component } from 'react';
import {
	Navigator,
	View,
	Text,
	StatusBar,
	TouchableHighlight,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Home from '../containers/home.container';
import { navStyle as styles } from '../styles';
let Icon = require('react-native-vector-icons/MaterialIcons');

class NavContainer extends Component {
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

	_getNavigationBar(hidden) {
		const { navigation } = this.props;
		if (navigation.hideNavBar) {
			return null;
		}

		//TODO: Make the icons and buttons config based
		let NavigationBarRouteMapper = {
			LeftButton(route, navigator, index, navState) {
				if (index === 0) { //just to test the icon and placements
					return (
						<TouchableOpacity
							underlayColor="transparent"
							style={ styles.leftNavButton }
							onPress={() => { if (index > 0) { navigator.pop() } } }>
							<Icon name='menu' size={30} />
						</TouchableOpacity>
					)
				}
				else { return null }
			},
			RightButton(route, navigator, index, navState) {
				if (route.onPress) {
					return (
						<TouchableOpacity
							style={ styles.rightNavButton }
							onPress={ () => route.onPress() }>
							<Icon name='shopping-cart' size={25} /> 
						</TouchableOpacity>
					)
				}
			},
			Title(route, navigator, index, navState) {
				return <Text style={ styles.title }>{route.title}</Text>
			}
		};

		return (
			<Navigator.NavigationBar
				style={ styles.nav }
				routeMapper={ NavigationBarRouteMapper } />
		)
	}

	render() {
		const initialRoute = {
			name: 'home',
			title: 'BROWSE',
			onPress: () => {
				console.log("pressed right button");
			},
			component: Home
		};

		return (
			<View style={{ flex: 1 }}>
				<StatusBar
					hidden={false}
					barStyle="default"
					/>
				<Navigator
					style={{ flex: 1 }}
					navigationBar={
						this._getNavigationBar()
					}
					configureScene={ this.configureScene }
					initialRoute={ initialRoute }
					renderScene={ this.renderScene } />
			</View>
		);
	}
}

const mapStateToProps = function (state) {
	return state;
};
const Nav = connect(mapStateToProps)(NavContainer);
export default Nav;