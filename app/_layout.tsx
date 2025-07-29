import store from '@/redux/store'
import { Stack } from 'expo-router'
import React from 'react'
import { Provider } from 'react-redux'
import '../global.css'
const _layout = () => {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='auth/sign' />
        <Stack.Screen name='auth/login' />
        <Stack.Screen name='(tabs)' />
      </Stack>
    </Provider>
  )
}

export default _layout