import injectSaga from 'App/Lib/injects/injectSaga'
import Colors from 'App/Themes/Colors'
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { ActivityIndicator } from 'react-native'
import { compose } from 'redux'
import saga from './sagas'

// Styles
import styles from './styles'

class LaunchScreen extends Component {
  render () {
    return (
      <LinearGradient colors={[Colors.secondary, Colors.secondaryLight]} style={styles.mainContainer}>
        <ActivityIndicator color={Colors.snow} size='large' />
      </LinearGradient>
    )
  }
}

export default compose(
  injectSaga({ key: 'launch', saga })
)(LaunchScreen)
