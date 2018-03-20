import { StyleSheet } from 'react-native'
import { black, gray, white } from '../../utils/colors'

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

export default styles