import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const router = useRouter()
  
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>

      <Pressable
        onPress={(e) => router.push({
          pathname: '/more',
          params: {
            id: 'abc',
            age: 20
          }
        })}
      >
        <Text>More</Text>
      </Pressable>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})