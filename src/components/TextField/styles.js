import { StyleSheet } from 'react-native'
import { black, danger } from '../../utils/colors'

const styles = StyleSheet.create({
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
  label: {
    marginBottom: 10
  }
})

export default styles