import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import Home from './screens/home'
import Loginsk from './screens/loginscreen'

import Navigator from './config/routes'

import raza from 'raza'

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
	componentDidMount(){
		raza.show('Boilerplate runs fine', raza.LONG);
		
	}
	render() {
		return (
			<Navigator />
		)	
	}
}
