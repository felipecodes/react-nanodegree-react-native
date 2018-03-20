import React from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './styles'

const TextField = ({
  containerStyle,
  labelStyle,
  inputStyle,
  errorStyle,
  ...props
}) => (
  <View style={containerStyle}>
    {props.label && (
      <Text style={[styles.label, labelStyle]}>{props.label}</Text>
    )}

    <TextInput
      style={[
        styles.fieldText,
        props.error && styles.fieldError,
        inputStyle
      ]}
      {...props}
    />

    {!!props.error && (
      <Text
        style={[
          styles.errorMessage,
          errorStyle
        ]}
      >
        {props.error}
      </Text>
    )}
  </View>
)

export default TextField