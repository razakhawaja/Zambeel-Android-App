import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'stretch',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
    position: 'absolute',
    bottom: 20,
  },

  logo: {
    width: imageWidth / 2,
  },
});