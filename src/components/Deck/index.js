import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Deck extends Component {
  render() {
    return (
      <View>
        <Text>Deck</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Quiz')
          }
        >
          <Text>GO to quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Deck