import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { fetchDecks } from '../../actions'
import Deck from '../Deck'

class DeckList extends Component {
  componentDidMount() {
    this.props.fetchDecks()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.decks.map((deck, index) => (
          <Deck
            key={deck.id}
            index={index}
            deck={deck}
            {...this.props}
          />
        ))}
      </ScrollView>
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