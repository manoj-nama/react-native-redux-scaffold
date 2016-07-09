import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
	Animated,
	Dimensions,
	TouchableWithoutFeedback,
	LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { openCloseDrawer } from '../actions';

let Icon = require('react-native-vector-icons/MaterialIcons');

class DrawerContainer extends Component {
	constructor(props) {
		super(props);
		let { showDrawer } = this.props.navigation;
		let {width, height} = Dimensions.get("window");
		this.state = { width, height };
		this.showDrawer = showDrawer;
	}

	hideMenu() {
		this.props.dispatch(openCloseDrawer());
	}

	componentDidMount() {
		LayoutAnimation.linear = LayoutAnimation.configureNext.bind(
			null,
			LayoutAnimation.create(150)
		);
	}

	render() {
		let { showDrawer } = this.props.navigation;
		let slideStyle = {
			left: showDrawer ? 0 : -this.state.width,
			width: this.state.width
		}
		
		if(showDrawer !== this.showDrawer) {
			console.log("Layout");
			LayoutAnimation.linear();
			this.showDrawer = showDrawer;
		}
		

		return (
			<View style={[styles.container, slideStyle]}>
				<TouchableWithoutFeedback
					onPress={ () => this.hideMenu() }>
					<View style={styles.container}></View>
				</TouchableWithoutFeedback>
				<View style={[styles.drawer]}>
					<StatusBar
						hidden={ showDrawer }
						barStyle="default"
						/>
					<TouchableOpacity
						style={ styles.closeBtn }
						onPress={ () => this.hideMenu() }>
						<Icon name='close' size={40} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		flex: 1,
	},
	drawer: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		width: 300,
		backgroundColor: '#07f',
		opacity: 0.8,
		shadowOffset: { width: 0, height: 0 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 10,
	},
	closeBtn: {
		marginLeft: 6,
		marginTop: 21,
	}
});

const mapStateToProps = function (state) {
	return state;
}

const Drawer = connect(mapStateToProps)(DrawerContainer);
export default Drawer;