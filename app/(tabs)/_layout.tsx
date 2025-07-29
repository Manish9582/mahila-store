import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
const TabScreens = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='index' options={{
        title: 'Home',
        tabBarIcon: () => (
          <AntDesign name="home" size={24} color="black" />
        )
      }} />
      <Tabs.Screen name='like' options={{
        title: 'Like',
        tabBarIcon: () => (
          <AntDesign name="hearto" size={24} color="black" />
        )
      }} />
      <Tabs.Screen name='shop' options={{
        title: 'Shop',
        tabBarIcon: () => (
          <FontAwesome name="shopping-bag" size={24} color="black" />
        )
      }} />
      <Tabs.Screen name='profile' options={{
        title: 'Profile',
        tabBarIcon: () => (
          <FontAwesome5 name="user-alt" size={24} color="black" />
        )
      }} />
    </Tabs>
  )
}

export default TabScreens

const styles = StyleSheet.create({})