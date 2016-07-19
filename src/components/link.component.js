import React, {
	Component,
} from 'react';

import {
	View,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity
} from 'react-native';

let Icon = require('react-native-vector-icons/MaterialIcons');

export default class Link extends Component {
	render() {
		const {
			text,
			icon,
			style,
			fontSize,
			onClick,
		} = this.props;
		return (
			<View style={ style }>
				<TouchableOpacity onPress={ onClick }>
					{
						icon ? 
						<Icon {...icon} /> :
						<Text style={{ fontSize: fontSize }} >{ text }</Text>
					}			
				</TouchableOpacity>
			</View>
		)
	}
}