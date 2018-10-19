import { Fonts, Colors } from 'App/Themes';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 0,
    elevation: 0
  },
  title: {
    ...Fonts.style.h5,
    color: Colors.snow
  }
})
