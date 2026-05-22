import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '@/components/common/CustomInput'
import { colors } from '@/constants/colorConstant'

// 피드 등록 화면
const RegFeedScreen = () => {
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode='on-drag'
        contentContainerStyle={styles.contentContainer}
      >
        <CustomInput 
          label='id'
        />
        <CustomInput 
          label='pw'
        />
        <CustomInput 
          label='id'
        />
        <CustomInput 
          label='id'
        />
        <CustomInput 
          label='id'
        />
        <CustomInput 
          label='id'
        />
        <CustomInput 
          label='id'
        />
        <CustomInput 
          label='id'
        />
        <CustomInput 
          label='id'
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default RegFeedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    gap: 12,
    paddingBottom: 60,
  },
})