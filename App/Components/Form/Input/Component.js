import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

const InputComponent = ({ inputStyle, ...rest }) => (
  <TextInput
    autoCapitalize='none'
    autoCorrect={false}
    underlineColorAndroid='transparent'
    {...rest}
    style={[styles.input, inputStyle]}
  />
)

export default InputComponent
