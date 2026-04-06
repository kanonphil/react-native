import { StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

// 같은 폴더(app folder) 내의 컴포넌트의 레이아웃을 구성하는 파일
const HomeLayout = () => {
  return (
    // app 폴더 내에 만들어지는 컴포넌트는 스택 구조를 갖겠다.
    <Stack 
      screenOptions={{headerShown: false}}
      // screenOptions={{
      //   headerShown: true,
      //   title: '메인 화면',
      //   headerStyle: {
      //     backgroundColor: '#2a2a2a',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //   },
      //   gestureEnabled: true,
      //   animation: 'slide_from_right'
      // }}
    />
  )
}

export default HomeLayout

const styles = StyleSheet.create({})