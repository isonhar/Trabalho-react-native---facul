import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

export const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/icons/clipboard.png')} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer!
      </Text>
    </View>
  )
}
