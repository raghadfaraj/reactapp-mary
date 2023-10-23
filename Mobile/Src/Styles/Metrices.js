import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const sHeight = width < height ? height : width;
const sWidth = width < height ? width : height;
const metrics = {
  screenWidth: sWidth,
  screenHeight: sHeight,
  navBarHeight: Platform.OS === 'ios' ? 44 : 60,
  padding: 16,
  tabIconSize: 25,
  tabBarSize: Platform.OS == 'ios' ? 90 : 100,
};

export default metrics;
