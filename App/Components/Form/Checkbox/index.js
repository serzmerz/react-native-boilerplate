import React from 'react'
import PropTypes from 'prop-types'
import { Image, View, TouchableOpacity } from 'react-native'
import styles from './styles'

const Checkbox = ({ label, style, meta: { touched, error }, input, ...rest }) => (
  <View style={[styles.wrapper, style]}>
    <TouchableOpacity onPress={() => input.onChange(!input.value)} {...input} {...rest} style={styles.wrapCheckbox}>
      <View style={[styles.checkbox, touched && error && styles.error]}>
        <Image source={require('App/Images/Icons/check.png')} style={[!input.value && styles.invisible]} />
      </View>
      {label}
    </TouchableOpacity>
  </View>
)

Checkbox.propTypes = {
  label: PropTypes.node,
  style: PropTypes.object,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  }),
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    onChange: PropTypes.func
  })
}

export default Checkbox
