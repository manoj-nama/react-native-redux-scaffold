import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

class ProfileContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={ styles.container }>
				<Text>Profile Container</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	}
});

const mapStateToProps = function(state) {
	return state;
}

const Profile = connect(mapStateToProps)(ProfileContainer);
export default Profile;