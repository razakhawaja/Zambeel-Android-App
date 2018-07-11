import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import Home from './screens/home'

console.disableYellowBox = true;

EStyleSheet.build({
 $primaryBlue: '#FFFFFF',
 $white: '#FFFFFF',
 $lightGray: '#EAEAEA',
 $border: '#000000',
 $inputText: '#000000',
})

// export default () => <Home />

export default class HelloWorldApp extends Component {
	render() {
	return (
			<Home />
		)	
	}
	
}
