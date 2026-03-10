import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { useState } from 'react'

// <View> -> html의 div와 같은 역할
// react native에서는 문자 작성 시 반드시 컴포넌트로 감싸야 함
const Study_1 = () => {
  // TextInput에 입력한 데이터를 저장할 State 변수
  const [id, setId] = useState('')

  return (
    <View>
      <View>
        <Text>아이디</Text>
        <TextInput 
          style={styles.input}
          // TextInput의 onChange 함수의 매개변수는 입력한 데이터를 의미
          onChangeText={text => {
            console.log(text)
            setId(text)
          }}

          onChange={e => {
            console.log(1)
            console.log(e.nativeEvent)
          }}
        />
      </View>

      {/* 버튼 */}
      <Pressable 
        onPress={e => {alert(1)}}
        style={styles.btnContainer}
      >
        <Text style={styles.btn}>버튼</Text>
      </Pressable>
    </View>
  )
}

export default Study_1

// 디자인 중요 사항!
// 기본적으로 flex 적용되어 있음
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 4
  },
  btnContainer: {
    backgroundColor: 'blue',
    width: '30%',
    height: 34,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    color: 'white'
  }
})