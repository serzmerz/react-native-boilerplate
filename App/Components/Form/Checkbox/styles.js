import ApplicationStyles from 'App/Themes/ApplicationStyles'
import Colors from 'App/Themes/Colors'
import Fonts from 'App/Themes/Fonts'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    position: 'relative'
  },
  checkbox: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: Colors.snow,
    ...ApplicationStyles.shadow
  },
  label: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
    color: Colors.snow,
    marginBottom: 2
  },
  error: {
    borderWidth: 1,
    borderColor: Colors.primary
  },
  visible: {
    display: 'flex'
  },
  invisible: {
    display: 'none'
  },
  wrapCheckbox: {
    flexDirection: 'row'
  }
})
