import { StyleSheet } from 'react-native'
import { black } from '../../utils/colors'

const styles = StyleSheet.create({
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

export default styles