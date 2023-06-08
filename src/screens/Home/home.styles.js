import { StyleSheet } from 'react-native'

import { colors } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600],
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerText: {
    color: colors.gray[300],
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
})
