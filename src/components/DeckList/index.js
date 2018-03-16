import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>Deck List</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(
              'Deck',
              { name: 'React\'s Concepts' }
            )
          }
        >
          <Text>GO to deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckList