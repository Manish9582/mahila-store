import { Stack } from 'expo-router'
import React from 'react'
import '../global.css'
const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index'/>
      <Stack.Screen name='auth/sign'/>
      <Stack.Screen name='auth/login'/>
      <Stack.Screen name='(tabs)/home'/>
    </Stack>
  )
}

export default _layout