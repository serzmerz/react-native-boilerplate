import Colors from 'App/Themes/Colors'
import Fonts from 'App/Themes/Fonts'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    position: 'relative'
  },
  input: {
    backgroundColor: Colors.snow,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.input,
    borderRadius: 3,
    color: Colors.text,
    padding: 15,
    marginBottom: 20
  },
  label: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
    color: Colors.snow,
    marginBottom: 2
  },
  error: {
    display: 'none',
    position: 'absolute',
    bottom: 4,
    left: 0,
    fontFamily: Fonts.type.bold,
    fontSize: 10,
    color: Colors.primary
  },
  visible: {
    display: 'flex'
  }
})
