import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configure.store';
import App from './containers/app.container';

const store = configureStore();

export default class ecommApp extends Component {
  render() {
    return (
			<Provider store={store}>
				<App />
			</Provider>
    );
  }
}