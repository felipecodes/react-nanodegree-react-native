import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import styles from './styles'

const Button = props => (
  <TouchableHighlight
    style={styles.button}
    onPress={props.onPress}
  >
    <Text style={styles.buttonText}>{props.children}</Text>
  </TouchableHighlight>
)

export default Button