import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import color from 'color';
import { Button } from 'react-native';



import styles from './styles';

// class Lb extends Component {

const Lb = (props) => {
  // render() {
    return (
      <View style = {styles.bttn}>
		<Button
		  onPress={props.onPress}
		  title="Sign In"
		  color="#9E9E9E"
		  accessibilityLabel="Learn more about this purple button"

		/>
      </View>
    );
  // }
}


Lb.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
}

export default Lb
