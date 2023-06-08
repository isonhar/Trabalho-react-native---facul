import AsyncStorage from '@react-native-async-storage/async-storage'

export const save = async (data = [], key = 'key') => {
  try {
    const dataString = JSON.stringify(data)
    await AsyncStorage.setItem(key, dataString)
    return true
  } catch (error) {
    console.log(error)
  }
  return false
}

export const load = async (key) => {
  try {
    const jsonData = await AsyncStorage.getItem(key)
    const data = JSON.parse(jsonData)

    if (data) {
      return data || []
    }
  } catch (error) {
    console.log(error)
  }
  return []
}
