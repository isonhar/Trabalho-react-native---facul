import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../constants'
import { styles } from './styles'

export const Form = ({ placeholder, onSubmit }) => {
  const [text, setText] = useState()

  const onChangeInput = (value) => {
    setText(value)
  }

  const handleAddTask = () => {
    onSubmit(text.trim())
    setText('')
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.gray[300]}
        keyboardType="default"
        onChangeText={onChangeInput}
        value={text}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Image source={require('../../../assets/icons/plus.png')} />
      </TouchableOpacity>
    </View>
  )
}
