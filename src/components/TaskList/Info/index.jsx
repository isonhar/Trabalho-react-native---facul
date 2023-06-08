import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../../../constants'

const InfoTag = ({ text, value, color }) => {
  const textStyle =
    color === 'primary'
      ? { ...styles.text, color: colors.blue }
      : { ...styles.text, color: colors.purple }

  return (
    <View style={styles.content}>
      <Text style={textStyle}>{text}</Text>
      <View style={styles.counter}>
        <Text style={styles.counterText}>{value}</Text>
      </View>
    </View>
  )
}

export const Info = ({ tasks }) => {
  const created = tasks.length

  const completed = tasks.reduce(
    (counter, task) => (task.completed ? counter + 1 : counter),
    0
  )

  return (
    <View style={styles.container}>
      <InfoTag text="Criadas" value={created} color="primary" />

      <InfoTag text="Concluidas" value={completed} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    color: colors.gray[300],
    fontSize: 14,
    fontWeight: 'bold',
  },
  counter: {
    backgroundColor: colors.gray[400],
    height: 20,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    color: colors.gray[200],
    fontSize: 12,
    fontWeight: 'bold',
  },
})
