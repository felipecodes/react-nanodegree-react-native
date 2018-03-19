import React, { Component } from 'react'
import { Keyboard, View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { createDeckAsync } from '../../actions'
import { black, white, danger } from '../../utils/colors'

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
          this.props.navigation.goBack()
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
        <View>
          <TextInput
            style={[styles.fieldText, errors.deck && styles.fieldError]}
            onChangeText={this.handleChangeText}
            value={values.deck}
          />
          {errors.deck && (
            <Text style={styles.errorMessage}>{ errors.deck }</Text>
          )}
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.createDeck}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingRight: 16,
    paddingLeft: 16,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  fieldText: {
    height: 40,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 8,
    borderColor: black,
    borderWidth: 1
  },
  fieldError: {
    borderWidth: 1,
    borderColor: danger
  },
  errorMessage: {
    color: danger
  },
  button: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: black,
    borderRadius: 7,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 32
  },
  buttonText: {
    fontSize: 16
  }
})

const mapDispatchToProps = dispatch => ({
  createDeck(text) {
    return dispatch(createDeckAsync(text))
  }
})

export default connect(null, mapDispatchToProps)(NewDeck)
