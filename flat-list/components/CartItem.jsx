import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const CartItem = ({item, deleteItem}) => {
  
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>
        {item.item}
      </Text>
      <MaterialIcons 
        name='mode-edit-outline'
        size={24}
        color='black'
        style={styles.icon}
      />
      <MaterialIcons 
        name='delete-forever'
        size={24}
        color='black'
        style={styles.icon}
      />
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
  icon: {
    width: '10%'
  }
})