import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Button from '../Button'
import { gray } from '../../utils/colors'
import styles from './styles'

const QuizHome = props => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.deck.title}</Text>
    <Text style={styles.cards}>
      {props.deck.questions.length}
      {` card${props.deck.questions.length > 1 ? 's' : ''}`}
    </Text>
    <Button
      style={styles.addCardStyles}
      buttonTextStyles={styles.addCardTextStyles}
      underlayColor={gray}
      onPress={() => props.navigation.navigate('NewCard', {
        deckId: props.deck.id
      })}
    >
      Add Card
    </Button>
    <Button
      style={styles.startQuizStyles}
      buttonTextStyles={styles.startQuizTextStyles}
      onPress={() => props.navigation.navigate('Quiz')}
    >
      Start Quiz
    </Button>
  </View>
)

QuizHome.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    questions: PropTypes.array.isRequired,
  })
}

const mapStateToProps = ({ decks }, { navigation }) => ({
  deck: decks[navigation.getParam('deckId')]
})

export default connect(mapStateToProps)(QuizHome)
