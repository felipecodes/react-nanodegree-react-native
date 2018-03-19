import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../Button'
import { gray, white, black } from '../../utils/colors'

const QuizHome = props => {
  const deck = props.navigation.getParam('deck')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.cards}>{deck.questions.length} cards</Text>
      <Button
        style={styles.addCardStyles}
        buttonTextStyles={styles.addCardTextStyles}
        underlayColor={gray}
        onPress={() => props.navigation.navigate('NewCard')}
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
}

QuizHome.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    questions: PropTypes.array.isRequired,
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  cards: {
    fontSize: 18,
    textAlign: 'center',
    color: gray
  },
  addCardStyles: {
    width: 200,
  },
  startQuizStyles: {
    width: 200,
    backgroundColor: black
  },
  startQuizTextStyles: {
    color: white
  }
})

export default QuizHome
