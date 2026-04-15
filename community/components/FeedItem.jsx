import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Profile from './Profile';
import { colors } from '@/constants/colorConstant';

const FeedItem = ({item}) => {
  // 좋아요 상태 변수
  const [isLike, setIsLike] = useState(false)
  
  return (
    <View style={styles.contaier}>
      {/* 작성자 정보 */}
      <Profile item={item} />
      {/* 게시글 제목 */}
      <Text style={styles.title}>{item.title}</Text>
      {/* 게시글 내용 */}
      <Text style={styles.content}>{item.content}</Text>
      {/* 게시글 정보 */}
      <View style={styles.iconContainer}>
        {/* 좋아요 */}
        <Pressable
          style={styles.icon}
          onPress={(e) => setIsLike(!isLike)}
        >
          {/* 이미지 */}
          <FontAwesome name={isLike ? 'heart' : 'heart-o'} size={20} color="red" />
          {/* count */}
          <Text>{item.likeCnt}</Text>
        </Pressable>

        {/* 댓글 */}
        <Pressable
          style={styles.icon}
        >
          {/* 이미지 */}
          <FontAwesome name="comment-o" size={20} color="black" />
          {/* count */}
          <Text>{item.replyCnt}</Text>
        </Pressable>

        {/* 조회수 */}
        <Pressable
          style={styles.icon}
        >
          {/* 이미지 */}
          <Ionicons name="eye-outline" size={24} />
          {/* count */}
          <Text>{item.readCnt}</Text>
        </Pressable>
      </View>
   </View>
  )
}

export default FeedItem

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: 'white',
    padding: 10
  },
  title: {
    fontSize: 16,
    marginBottom: 12
  },
  content: {
    fontSize: 14,
    color: colors.GRAY_600,
    marginBottom: 12
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_300
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingTop: 8
  },
})