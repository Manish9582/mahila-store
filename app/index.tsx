import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    const route = useRouter();
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const login: any = await AsyncStorage.getItem('login');
                if (login) {
                    route.replace('/(tabs)')
                }else{
                    route.replace('/auth/login')
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        checkAuth()
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-purple-50">
            <View className="flex-1">
                <View className='w-full h-[400px]'>
                    <Image source={require('@/assets/images/logo.png')} className='w-full h-[100%]' />
                </View>
                <View className='flex-1 bg-purple-800 w-full rounded-t-3xl justify-center items-center px-10'>
                    <TouchableOpacity className='w-full bg-white py-4 rounded-lg'>
                        <Link href={'/auth/sign'}>
                            <Text className='text-center text-[18px] font-semibold'>Register</Text>
                        </Link>
                    </TouchableOpacity>
                    <TouchableOpacity className='w-full bg-white py-4 rounded-lg mt-5'>
                        <Link href={'/auth/login'}>
                            <Text className='text-center text-[18px] font-semibold'>Login</Text>
                        </Link>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home
