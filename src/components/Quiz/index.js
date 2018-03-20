import React, { Component, Fragment } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Button from '../Button'
import styles from './styles'

class Quiz extends Component {
  constructor(props) {
    super(props)
    const questions = props.questions.length
    this.state = {
      showAnswer: false,
      score: 0,
      card: props.questions.shift(),
      question: 1,
      questions
    }
  }

  handleClickCorrect = () => {
    const card = this.props.questions.shift()
    this.setState(({ score }) => ({
      showAnswer: false,
      question: ++this.state.question,
      score: ++score,
      card
    }))
  }

  handleClickIncorrect = () => {
    const card = this.props.questions.shift()
    this.setState({
      question: ++this.state.question,
      showAnswer: false,
      card
    })
  }

  showAnswer = () => {
    this.setState({ showAnswer: true })
  }

  render() {
    const { showAnswer, score, card } = this.state
    if (card) {
      return (
        <View style={{flex: 1}}>
          <Text style={styles.questions}>
            {this.state.question} / {this.state.questions}
          </Text>

          <View style={styles.container}>
            <Text style={styles.title}>{card.question}</Text>

            {!showAnswer && (
              <Button onPress={this.showAnswer}>Answer</Button>
            )}

            {showAnswer && (
              <Fragment>
                <Text style={styles.answer}>{card.answer}</Text>
                <Button
                  style={styles.correctButton}
                  buttonTextStyles={styles.buttonText}
                  onPress={this.handleClickCorrect}
                >
                  Correct
                </Button>

                <Button
                  style={styles.incorrectButton}
                  buttonTextStyles={styles.buttonText}
                  onPress={this.handleClickIncorrect}
                >
                  <Text>Incorrect</Text>
                </Button>
              </Fragment>
            )}
          </View>
        </View>
      )
    }

    return (
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.scoreTitle}>Your score</Text>
      </View>
    )
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  const deckId = navigation.getParam('deckId')
  const deck = decks[deckId]
  return {
    questions: [ ...deck.questions ]
  }
}

export default connect(mapStateToProps)(Quiz)
