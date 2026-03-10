import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Study_1 from '../components/Study_1'
import Study_2 from '../components/Study_2'

// 프로젝트 실행 시 최초 실행 파일
// 최초 실행파일 순서 _layout.js -> index.js
// 파일의 이름은 통상적으로 HomeScreen으로 작성 함
// react native는 파일명과 컴포넌트명이 같지 않은 경우가 많음

// <View> -> html의 div와 같은 역할
// react native에서는 문자 작성 시 반드시 컴포넌트로 감싸야 함
const HomeScreen = () => {

  return (
    // 폰 화면에서 상태바(Status Bar) 영역을 제외한 나머지 영역만 사용할 때 작성
    <SafeAreaView style={styles.container}>
      <Study_1 />     
      <Study_2 />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'red',
    // 세로 화면 꽉 채움
    flex: 1
  },
})