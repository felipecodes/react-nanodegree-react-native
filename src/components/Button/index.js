import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import styles from './styles'

const Button = ({ style, buttonTextStyles, ...props }) => (
  <TouchableHighlight
    style={[
      styles.button,
      style && style
    ]}
    {...props}
  >
    <Text style={[
      styles.buttonText,
      buttonTextStyles && buttonTextStyles
    ]}>
      {props.children}
    </Text>
  </TouchableHighlight>
)

export default Button