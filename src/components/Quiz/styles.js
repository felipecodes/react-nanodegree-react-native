import { StyleSheet } from 'react-native'
import { success, danger, white } from '../../utils/colors'

const styles = StyleSheet.create({
  correctButton: {
    width: 200,
    borderWidth: 0,
    backgroundColor: success
  },
  incorrectButton: {
    width: 200,
    borderWidth: 0,
    backgroundColor: danger,
  },
  buttonText: {
    color: white
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16
  },
  questions: {
    padding: 16,
    fontSize: 18
  },
  title: {
    fontSize: 32,
    marginBottom: 16
  },
  answer: {
    fontSize: 16
  },
  scoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  score: {
    fontSize: 78,
    marginBottom: 25
  },
  scoreTitle: {
    fontSize: 32
  }
})

export default styles