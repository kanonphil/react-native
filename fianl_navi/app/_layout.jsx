import { StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

const RootLayout = () => {  
  return (
    <Stack screenOptions={{headerShown: false}} />
  )
}

export default RootLayout

const styles = StyleSheet.create({})