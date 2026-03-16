import { Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CartList from '../components/CartList'
import { useState } from 'react'
import { dummy_data } from '../data/dummy'

const HomeScreen = () => {
  // 새롭게 입력한 장 볼 목록을 저장할 state 변수
  const [newItem, setNewItem] = useState('')

  const [cartList, setCartList] = useState(dummy_data)

  // 장바구니 목록 추가
  const addCart = () => {
    // 추가할 id
    // Math.max([1, 2, 3]) => 3
    // 배열의 데이터 수만큼 반복하면서 return 되는 데이터를 배열로 반환
    const idList = cartList.map(item => item.id)

    // 추가할 데이터
    const newData = {
      id: cartList.length > 0 ? Math.max(...idList) + 1 : 1,
      item: newItem
    }

    // 추가할 데이터를 cartList에 저장
    setCartList([
      ...cartList,
      newData
    ])

    // TextInput 초기화
    setNewItem('')
  }
  
  return (
    // 빈 곳 터치 시 키보드 숨김 기능
    // accessible={false} props가 있어야 아이폰에서도 정상동작
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input} 
          value={newItem}
          onChangeText={text => setNewItem(text)}
          // 터치 키보드의 ok, 선택, 엔터 버튼 터치 시 실행하는 이벤트
          // 입력한 데이터를 cartList에 추가
          onSubmitEditing={() => addCart()}
        />
        <CartList 
          cartList={cartList}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red'
  },
  input: {
    borderWidth: 1
  }
})