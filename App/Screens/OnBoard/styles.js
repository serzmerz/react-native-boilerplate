import Colors from 'App/Themes/Colors'
import Fonts from 'App/Themes/Fonts'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  viewPager: {
    flex: 1
  },
  page: {
    position: 'relative'
  },
  image: {
    flex: 0.5,
    width: '100%'
  },
  content: {
    flex: 0.5,
    backgroundColor: Colors.snow,
    paddingVertical: 35,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    ...Fonts.style.h3,
    textAlign: 'center',
    marginHorizontal: 20,
    color: Colors.dark
  },
  button: {
    width: 200
  },
  dotStyle: {
    backgroundColor: Colors.backgroundGrey,
    width: 10,
    height: 10,
    borderRadius: 5
  },
  selectedDotStyle: {
    backgroundColor: Colors.secondary,
    width: 10,
    height: 10,
    borderRadius: 5
  },
  skip: {
    position: 'absolute',
    paddingVertical: 10,
    marginVertical: 15,
    zIndex: 10,
    right: 0,
    top: 10
  }
})
