import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const login = () => {
  const [login, setlogin] = useState<any>({
    email: '',
    password: ''
  })
  const hanldeLoginForm = (key: string, value: string) => {
    setlogin((pre: any) => ({
      ...login,
      [key]: value.trim()
    }))
  }

  return (
    <SafeAreaView className='bg-purple-50'>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-1 justify-center items-center">
            <View className='w-full h-[400px]'>
              <Image source={require('@/assets/images/logo.png')} className='w-full h-[100%]' />
            </View>

            <View className='w-full px-8'>
              <View>
                <Text className='font-semibold text-[18px] mb-1'>Email</Text>
                <TextInput className='border border-gray-300 px-2 rounded-md' keyboardType='email-address'
                  onChangeText={(text) => {
                    hanldeLoginForm('email', text)
                  }}
                />

              </View>
              <View>
                <Text className='font-semibold text-[18px] mb-1'>Password</Text>
                <TextInput className='border border-gray-300 px-2 rounded-md' secureTextEntry={true}
                  onChangeText={(numeric) => {
                    hanldeLoginForm('password', numeric)
                  }}
                />

              </View>
              <View className='my-4'>
                <TouchableOpacity className='w-auto bg-purple-800 px-6 py-2.5 rounded-lg'>
                  <Text className='font-bold text-white text-center text-[19px]'>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

export default login

const styles = StyleSheet.create({})
