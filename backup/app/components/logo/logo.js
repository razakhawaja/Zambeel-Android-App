import React from 'react'
import { View, Image, Text, ImageBackground } from 'react-native'
import styles from './styles'


const Logo = () => (
  <View style={styles.container}>
    <Image
      resizeMode="contain"
      style={styles.containerImage}
      source={require('./images/images/zambeel.jpg')}
    >
      {/*<Image resizeMode="contain" style={styles.logo} source={require('./images/images/zambeel.jpg')} />*/}
    </Image>
  </View>
);


export default Logo