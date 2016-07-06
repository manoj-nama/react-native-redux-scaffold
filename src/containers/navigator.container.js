import React, { Component } from 'react';
import {
	Navigator,
	View,
	Text,
	StatusBar,
	TouchableHighlight,
	StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import HomeComponent from '../components/home.component';
import { navStyle as styles } from '../styles/container.style';

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

		let NavigationBarRouteMapper = {
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
			<Navigator.NavigationBar
				style={ styles.nav }
				routeMapper={ NavigationBarRouteMapper } />
		)
	}

	render() {
		const initialRoute = {
			name: 'home',
			title: 'BROWSE',
			component: HomeComponent
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

const mapStateToProps = function(state) {
	return state;
};
const Nav = connect(mapStateToProps)(NavContainer);
export default Nav;