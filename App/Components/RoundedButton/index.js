import Colors from 'App/Themes/Colors'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

export default class RoundedButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.string,
    navigator: PropTypes.object
  }

  getText () {
    const buttonText = this.props.children || ''
    return buttonText.toUpperCase()
  }

  render () {
    const { onPress, containerStyles } = this.props

    return (
      <TouchableOpacity onPress={onPress} style={[styles.wrapper, containerStyles]}>
        <LinearGradient colors={[Colors.primaryLight, Colors.primary]} style={styles.button}>
          <Text style={styles.buttonText}>{this.getText()}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}
