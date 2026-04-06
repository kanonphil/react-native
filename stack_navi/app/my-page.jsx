import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const MyPageScreen = () => {
  const params = useLocalSearchParams()
  
  return (
    <SafeAreaView>
      <Text>my-page</Text>
      <Text>id: {params.id}</Text>
      <Text>age: {params.age}</Text>
    </SafeAreaView>
  )
}

export default MyPageScreen

const styles = StyleSheet.create({})