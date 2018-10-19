import { StyleSheet } from 'react-native'
import { ApplicationStyles } from 'App/Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
