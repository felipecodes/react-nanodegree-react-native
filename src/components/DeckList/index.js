import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { fetchDecks } from '../../actions'
import Deck from '../Deck'

class DeckList extends Component {
  componentDidMount() {
    this.props.fetchDecks()
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.decks.map((deck, index) => (
          <Deck
            key={deck.id}
            index={index}
            deck={deck}
            {...this.props}
          />
        ))}
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks: Object.keys(decks).map(key => decks[key])
})

const mapDispatchToProps = dispatch => ({
  fetchDecks() {
    dispatch(fetchDecks())
  }
})


const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList)