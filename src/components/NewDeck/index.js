import React, { Component } from 'react'
import { Keyboard, View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import Button from '../Button'
import TextField from '../TextField'
import { createDeckAsync } from '../../actions'
import { black, gray, danger } from '../../utils/colors'
import styles from './styles'

class NewDeck extends Component {
  constructor(props) {
    super(props)
    this.state = this.initialValues()
  }

  initialValues = () => ({
    values: { deck: '' },
    errors: {}
  })

  handleChangeText = text => {
    this.setState(() => ({
      values: { deck: text },
      errors: text ? {} : { deck: 'title field is required' }
    }))
  }

  createDeck = () => {
    const { deck } = this.state.values
    if (deck && deck.length) {
      Keyboard.dismiss()
      this.setState(this.initialValues())
      return this.props.createDeck(deck)
        .then(() => {
          this.props.navigation.popToTop('DeckList')
        })
    }

    this.setState({
      errors: { deck: 'title field is required' }
    })
  }

  render() {
    const { values, errors } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextField
          value={values.deck}
          error={errors.deck}
          onChangeText={this.handleChangeText}
        />
        <Button
          underlayColor={gray}
          onPress={this.createDeck}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </Button>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createDeck(text) {
    return dispatch(createDeckAsync(text))
  }
})

export default connect(null, mapDispatchToProps)(NewDeck)
