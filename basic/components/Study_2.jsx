import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'

const Study_2 = () => {
  const [loginData, setLoginData] = useState({ 
    id: '', 
    pw: '' 
  })
  const [isLogin, setIsLogin] = useState(false)

  const handleLogin = (key, value) => {
    setLoginData({
      ...loginData,
      [key]: value
    })
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>
        Login
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Input Your ID'
        value={loginData.id}
        onChangeText={text => {
          handleLogin('id', text)
          setIsLogin(false)
        }}
      />
      <TextInput
        style={styles.input}
        placeholder='Input Your Password'
        value={loginData.pw}
        onChangeText={text => {
          handleLogin('pw', text)
          setIsLogin(false)
        }}
        textContentType="password"
        secureTextEntry
      />

      <Pressable
        style={styles.btnContainer}
        onPress={() => {
          setIsLogin(true)
        }}
      >
        <Text style={styles.btn}>로그인</Text>
      </Pressable>

      {isLogin && (
        <View>
          <Text>입력한 정보</Text>
          <Text>아이디: {loginData.id}</Text>
          <Text>비밀번호: {loginData.pw}</Text>
        </View>
      )}
    </View>
  )
}

export default Study_2

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    gap: 10,
    marginHorizontal: 'auto'
  },
  title: {
    fontWeight: 600,
    fontSize: 30,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 4
  },
  btnContainer: {
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  btn: {
    color: 'white'
  }
})