import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Login = () => {
  const [login, setlogin] = useState<any>({
    email: '',
    password: ''
  })
  const route = useRouter();
  const [auth, setauth] = useState<any>([])
  const hanldeLoginForm = (key: string, value: string) => {
    setlogin((pre: any) => ({
      ...pre,
      [key]: value.trim()
    }))
  }
  useEffect(() => {
    const getUserData = async () => {
      try {
        let data: any = await AsyncStorage.getItem('user')
        if (data) {
          const parsed = JSON.parse(data);
          setauth(parsed);
        }
      } catch (error) {
        console.log(error)
      }
    }
    getUserData()
  }, [])
  const AuthLoginForm = () => {
    if (auth.email === login.email) {
      if (auth.password === login.password) {
        const LoginLocal = async () => {
          try {
           await AsyncStorage.setItem('login', 'success');
               route.replace('/(tabs)')
          } catch (error) {
            console.log(error)
          }
        }
        LoginLocal();
      } else {
        Alert.alert('Password is not match')
      }
    } else {
      Alert.alert('Email is not match')
    }
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
                  <Text className='font-bold text-white text-center text-[19px]' onPress={AuthLoginForm}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

export default Login
