import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'

const CartItem = ({item}) => {
  // 현재 수정중인지 상태를 파악하기 위한 state 변수
  const [isEditing, setIsEditing] = useState(false)
  
  return (
    <View style={styles.itemContainer}>
      {isEditing 
        ? 
        <>
          <TextInput 
            style={styles.input}
            value={item.item}
          />
        </>
        :
        <>
          <Text style={styles.title}>
            {item.item}
          </Text>
          <Pressable
            onPress={() => setIsEditing(true)}
            style={styles.iconContainer}
          >
            <MaterialIcons 
              name='mode-edit-outline'
              size={24}
              color='black'
              style={styles.icon}
            />
          </Pressable>
          <Pressable
            style={styles.iconContainer}
          >
            <MaterialIcons 
              name='delete-forever'
              size={24}
              color='black'
              style={styles.icon}
            />
          </Pressable>
        </>
      }
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center'
  },
  title: {
    width: '80%',
    fontSize: 20
  },
  iconContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1
  }
})