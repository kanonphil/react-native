import { StyleSheet } from 'react-native'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{tabBarInactiveTintColor: 'blue', headerShown: false}}>
      <Tabs.Screen 
        // 탭 터치 시 열릴 파일명(폴더명 입력 시 해당 폴더 안의 index 파일)
        name='(home)'    //  /(home)/index.jsx
        options={{
          // 탭 이름
          title: '홈',
          tabBarIcon: () => <MaterialIcons name='home' size={24} color='black' />
        }}
      />
      <Tabs.Screen 
        name='profile'    //  /profile/index.jsx
        options={{
          title: '프로필',
          href: null,
          popToTopOnBlur: true,
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} color="black" />
        }}
      />
      <Tabs.Screen 
        name='setting'    //  /setting/index.jsx
        options={{
          title: '설정',
          tabBarIcon: () => <MaterialIcons name="settings" size={24} color="black" />
        }}
      />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})