import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default class TransparentButton extends Component {
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
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}
