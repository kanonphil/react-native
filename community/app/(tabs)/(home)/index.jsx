import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import FeedItem from '@/components/FeedItem'
import { dummyData } from '../../../api/dummyData'
import { colors } from '@/constants/colorConstant'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useFocusEffect, useRouter } from 'expo-router'
import axios from 'axios'

// 피드 목록
const HomeScreen = () => {
  const router = useRouter()
  
  // 조회한 피드 목록 데이터
  const feedList = dummyData

  // 앱에서 페이지 전환 될때마다 실행
  useFocusEffect(useCallback(() => {
    getData()
  }, []))

  const getData = () => {
    axios.get('http://192.168.30.147:8080/members/t1')
      .then(response => {
        console.log(response.data)
      })
      .catch(e => console.error(e))
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
        // 반복할 데이터
        data={feedList}

        // 무엇을 반복으로 그릴거냐
        // 매개변수 item: 데이터 하나하나
        renderItem={({item}) => <FeedItem item={item} />}

        // map 함수의 key와 동일한 기능
        keyExtractor={(item) => item.id}

        // 디자인
        contentContainerStyle={styles.listContainer}
      />
      <Pressable 
        // style={styles.fab}
        // param 객체 구조분해 할당
        style={({pressed}) => [styles.fab, pressed && styles.pressed]}

        // style={(param) => {
        //   console.log(param)
        //   return [styles.fab, param.pressed && styles.pressed]
        // }}

        onPress={e => router.push('/reg-feed')}
      >
        <MaterialCommunityIcons name="pencil-plus-outline" size={24} color="white" />
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    gap: 10,
    backgroundColor: colors.GRAY_200
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  pressed: {
    opacity: 0.8,
  },
})