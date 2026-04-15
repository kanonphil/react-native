import { Tabs } from 'expo-router';
import React from 'react';

import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: () => <Feather name="home" size={24} color="black" />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => <Feather name="user" size={24} color="black" />
        }}
      />
    </Tabs>
  );
}