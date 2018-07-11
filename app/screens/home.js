import { Container } from '../components/container'
import { Logo } from '../components/logo'
import { Lb } from '../components/loginbutton'

import React, { Component, PropTypes } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import  { InputWithButton }  from '../components/TextInput';
import Password from '../components/TextInput/password'
// {Password} if you only pointed to directory and not file.
// No brackets if directly pointed to file.

const TEMP_BASE_CURRENCY = 'User ID    ';
const TEMP_QUOTE_CURRENCY = 'Password';
const TEMP_BASE_PRICE = '20100006';
const TEMP_QUOTE_PRICE = '';

class Home extends Component {

  // static PropTypes =  {
  //   navigation: PropTypes.object,
  // }

  handleLogin = () => {
    console.log('Login button pressed')
    this.props.navigation.navigate('loginn')
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          //onPress={this.handlePressBaseCurrency}
          //defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
        <Password
          buttonText={TEMP_QUOTE_CURRENCY}
          onChangeText={this.handleChangeText}
        />
        <Lb 
          onPress = {this.handleLogin}
        />
        
      </Container>
    );
  }
}

export default Home;
 