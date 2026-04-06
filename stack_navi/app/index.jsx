import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// 앱 실행 시 최초로 보이는 컴포넌트
const HomeScreen = () => {
  // react-native에서 페이지 이동 시 사용하는 객체
  const router = useRouter()

  return (
    <SafeAreaView>
      <Text>Home</Text>

      <Pressable
        onPress={(e) => router.push({
          pathname: '/detail',
          params: {
            name: 'detail',
            pw: '1234'
          }
        })}
      >
        <Text>상세페이지</Text>
      </Pressable>
     

      <Pressable
        onPress={(e) => router.push({
          pathname: '/my-page',
          params: {
            id: 'abc',
            age: 25
          }
        })}
      >
        <Text>마이페이지</Text>
      </Pressable>
     
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})