import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const DetailScreen = () => {
  // 페이지 이동 시 전달되는 데이터 받기 (객체로 전달 받음)
  const params = useLocalSearchParams()
  
  return (
    <SafeAreaView>
      <Text>detail</Text>
      <Text>name: {params.name}</Text>
      <Text>pw: {params.pw}</Text>
    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})