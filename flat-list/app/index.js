import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CartList from '../components/CartList'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <CartList />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})