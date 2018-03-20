import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import TextField from '../TextField'
import Button from '../Button'
import { addCardAsync } from '../../actions'
import { gray } from '../../utils/colors'
import styles from './styles'

export class NewCard extends Component {
  constructor(props) {
    super(props)
    this.state = this.initialValues()
  }

  initialValues = () => ({
    values: {
      question: '',
      answer: ''
    },
    errors: {
      question: '',
      answer: ''
    }
  })

  handleChange = (name, text) => {
    if (text) {
      return this.setState(state => ({
        values: {
          ...state.values,
          [name]: text
        }
      }))
    }

    this.setState(state => ({
      errors: {
        ...state.errors,
        [name]: 'field is required'
      }
    }))
  }

  addCard = () => {
    const { values } = this.state
    if (values.question && values.answer) {
      const deckId = this.props.navigation.getParam('deckId')
      this.setState(this.initialValues())
      return this.props.addCard(deckId, values)
        .then(() => {
          this.props.navigation.goBack()
        })
        .catch(console.error)
    }

    this.setState(state => ({
      errors: {
        question: values.question ? '' : 'field is required',
        answer: values.answer ? '' : 'field is required'
      }
    }))
  }

  render() {
    const { values, errors } = this.state
    return (
      <View style={styles.container}>
        <TextField
          label={'Question'}
          value={values.question}
          error={errors.question}
          onChangeText={text => this.handleChange('question', text)}
        />

        <TextField
          containerStyle={styles.textField}
          label={'Answer'}
          value={values.answer}
          error={errors.answer}
          onChangeText={text => this.handleChange('answer', text)}
        />

        <Button
          underlayColor={gray}
          onPress={this.addCard}
        >
          <Text>Confirm</Text>
        </Button>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addCard(deckId, card) {
    return dispatch(addCardAsync(deckId, card))
  }
})

export default connect(null, mapDispatchToProps)(NewCard)
