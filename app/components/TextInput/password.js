import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import color from 'color';

import styles from './styles';

const Password = (props) => {
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  const containerStyles = [styles.container];
  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={props.onPress}
        style={styles.buttonContainer}
        underlayColor={underlayColor}
      >
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput secureTextEntry = {true} style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  )
}

Password.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default Password;
