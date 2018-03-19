import { StyleSheet } from 'react-native'
import { black } from '../../utils/colors'

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: black,
    borderRadius: 7,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    paddingLeft: 24,
    marginTop: 32
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16
  }
})

export default styles