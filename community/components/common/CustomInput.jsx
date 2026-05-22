import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '@/constants/colorConstant'

const CustomInput = ({label, isPw=false, ...props}) => {
  // 포커스 유무의 상태값을 저장하고 있는 변수
  const [isFocused, setIsfocused] = useState(false)
  
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput 
        style={[styles.input, isFocused && styles.focused]}
        // 비번 설정
        secureTextEntry={isPw}
        // input이 포커스일 때
        onFocus={() => {setIsfocused(true)}}
        // 포커스 해제
        onBlur={() => {setIsfocused(false)}}
        {...props}
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: colors.GRAY_600,
  },
  input: {
    fontSize: 16,
    height: 42,
    borderWidth: 1,
    borderColor: colors.GRAY_500,
    backgroundColor: colors.GRAY_100,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  focused: {
    borderColor: colors.ORANGE_700,
  },
})