import InputComponent from './Component'
import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import styles from './styles'

const Input = ({ label, rightComponent, style, meta: { touched, error }, input, ...rest }) => (
  <View style={[styles.wrapper, style]}>
    {label && <Text style={styles.label}>{label.toUpperCase()}</Text>}
    <InputComponent
      {...input}
      {...rest}
    />
    {rightComponent}
    <Text style={[styles.error, touched && error && styles.visible]}>{error}</Text>
  </View>
)

Input.propTypes = {
  label: PropTypes.string,
  style: PropTypes.object,
  rightComponent: PropTypes.node,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  }),
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func
  })
}

export default Input
