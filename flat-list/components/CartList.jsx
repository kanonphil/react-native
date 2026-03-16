import { FlatList, StyleSheet, View } from 'react-native'

import CartItem from './CartItem'

const CartList = ({cartList}) => {
  
  return (
    <View style={styles.listContainer}>
      
      <FlatList 
        // 반복할 데이터
        data={cartList}

        // 반복해서 그릴 그림
        renderItem={({item}) => (
          <CartItem 
            item={item}
          />
        )}

        // map 함수의 key 속성과 동일
        keyExtractor={item => item.id.toString()}

        // 반복적으로 그려지는 컴포넌트를 감싸는 전체 영역에 디자인
        contentContainerStyle={{
          gap: 10
        }}
      />
    </View>
  )
}

export default CartList

const styles = StyleSheet.create({
  listContainer: {
    width: '90%',
    marginHorizontal: 'auto',
    padding: 12,
    backgroundColor: '#dddddd'
  }
})