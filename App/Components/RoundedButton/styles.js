import ApplicationStyles from 'App/Themes/ApplicationStyles'
import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  wrapper: {
    ...ApplicationStyles.shadow,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 16,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
