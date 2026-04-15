import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import face_01 from '@/assets/images/face-01.jpg'
import { colors } from '@/constants/colorConstant'

import FontAwesome from '@expo/vector-icons/FontAwesome';

const Profile = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* 프로필 사진 */}
        <Image 
          style={styles.img}
          source={face_01}
        />
        {/* 닉네임 + 작성일 */}
        <View>
          <Text style={styles.writer}>{item.writer}</Text>
          <Text style={styles.regDate}>{item.createDate}</Text>
        </View>
      </View>
      <FontAwesome name="ellipsis-v" size={24} color="black" />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    marginBottom: 10
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GRAY_300
  },
  writer: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  regDate: {
    fontSize: 12,
    color: colors.GRAY_500
  },
})