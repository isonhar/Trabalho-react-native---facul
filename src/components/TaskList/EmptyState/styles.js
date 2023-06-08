import { StyleSheet } from 'react-native'
import { colors } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors.gray[400],
    width: '100%',
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  title: {
    color: colors.gray[300],
    fontWeight: 'bold',
    marginTop: 16,
  },
  subtitle: {
    color: colors.gray[300],
  },
})
