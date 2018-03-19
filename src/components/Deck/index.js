import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { gray, silver } from '../../utils/colors'

const Deck = props => (
  <View
    style={[
      styles.container,
      (props.index % 2 === 0) && { backgroundColor: silver }
    ]}
  >
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        props.navigation.navigate('Quiz')
      }
    >
      <Text style={styles.title}>{props.deck.title}</Text>
      <Text style={styles.cards}>
        {props.deck.questions.length} cards
      </Text>
    </TouchableOpacity>
  </View>
)

Deck.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    questions: PropTypes.array.isRequired,
  })
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 36,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 36
  },
  title: {
    marginBottom: 5,
    fontSize: 24,
    textAlign: 'center'
  },
  cards: {
    fontSize: 16,
    textAlign: 'center',
    color: gray
  },
  button: {
    width: '100%'
  }
})

export default Deck