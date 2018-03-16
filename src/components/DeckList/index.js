import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { fetchDecks } from '../../actions'

class DeckList extends Component {
  componentDidMount() {
    this.props.fetchDecks()
  }

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

const mapDispatchToProps = dispatch => ({
  fetchDecks() {
    dispatch(fetchDecks())
  }
})

export default connect(null, mapDispatchToProps)(DeckList)