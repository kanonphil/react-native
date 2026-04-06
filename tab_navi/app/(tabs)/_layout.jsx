import { StyleSheet } from 'react-native'
import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

// (tabs) 폴더 내의 파일들을 tab 네비로 이동할 수 있도록 설정하는 파일
const TabLayout = () => {
  return (
    <Tabs 
      screenOptions={{
        // tabBarActiveTintColor: 'gray',
        tabBarInactiveTintColor: 'black',
        headerShown: false
      }}
    >
      <Tabs.Screen 
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: () => <MaterialIcons name='home' size={24} color='black' />,
          tabBarActiveTintColor: 'red'
        }}
      />
      <Tabs.Screen 
        name='my-page'
        options={{
          title: 'MyPage',
          tabBarIcon: () => <MaterialIcons name='account-circle' size={24} color='black' />,
          tabBarActiveTintColor: 'yellow'
        }}
      />
      <Tabs.Screen 
        name='settings' 
        options={{
          title: 'Settings',
          tabBarIcon: () => <MaterialIcons name='settings' size={24} color='black' />,
          tabBarActiveTintColor: 'blue'
        }}
      />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})