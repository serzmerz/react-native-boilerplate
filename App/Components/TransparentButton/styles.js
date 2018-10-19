import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderColor: Colors.snow,
    borderWidth: 2,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
