import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FeedItem from '@/components/FeedItem'
import { dummyData } from '../../../api/dummyData'
import { colors } from '@/constants/colorConstant'

// 피드 목록
const HomeScreen = () => {
  // 조회한 피드 목록 데이터
  const feedList = dummyData
  
  return (
    <View>
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
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    gap: 10,
    backgroundColor: colors.GRAY_200
  },
})