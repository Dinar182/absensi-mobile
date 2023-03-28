import {Dimensions} from 'react-native';

const textApp = {};
const colorApp = {};
const fontApp = {};
const dimensionDevice = {
  widthWindow: Dimensions.get('window').width,
  heightWindow: Dimensions.get('window').height,
  widthScreen: Dimensions.get('screen').width,
  heightScreen: Dimensions.get('screen').height,
};

export {textApp, colorApp, fontApp, dimensionDevice};
