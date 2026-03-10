import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Study_2 = () => {
  const [userInfo, setUserInfo] = useState({ 
    id: '', 
    pw: '' 
  })
  const [isLogin, setIsLogin] = useState(false)

  return (
    <View style={styles.inputContainer}>
      <Text>Study_2</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setUserInfo({
            ...userInfo, id: text
          })
          setIsLogin(false)
        }}
        placeholder='Input Your ID'
      />
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setUserInfo({
            ...userInfo, 
            pw: text
          })
          setIsLogin(false)
        }}
        textContentType="password"
        secureTextEntry
        placeholder='Input Your Password'
      />

      <Pressable
        onPress={() => setIsLogin(true)}
        style={styles.btnContainer}
      >
        <Text style={styles.btn}>로그인</Text>
      </Pressable>

      {isLogin && (
        <View>
          <Text>아이디: {userInfo.id}</Text>
          <Text>비밀번호: {userInfo.pw}</Text>
        </View>
      )}
    </View>
  )
}

export default Study_2

const styles = StyleSheet.create({
  inputContainer: {
    gap: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 4
  },
  btnContainer: {
    backgroundColor: 'blue',
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  btn: {
    color: 'white'
  }
})