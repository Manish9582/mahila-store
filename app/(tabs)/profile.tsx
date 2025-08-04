import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Profile = () => {

    const [updatepass, setupdatepass] = useState<any>({
        'old': '',
        'new': '',
        'confirm': ''
    })

    const ChangePass = (id: any, value: any) => {
        setupdatepass((pre: any) => ({
            ...pre,
            [id]: value.trim()
        }))
    }
    const updatePassSubmit = async () => {
        try {
            const data: any = await AsyncStorage.getItem('user');
            const user: any = JSON.parse(data);
            if (user.password === updatepass.old) {
                if (updatepass.confirm === updatepass.new) {
                    const check = { ...user, password: updatepass.new }
                    await AsyncStorage.setItem('user',JSON.stringify(check));
                } else {
                    Alert.alert('Old password is did not match')
                }
            } else {
                Alert.alert('Old password is did not match')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <SafeAreaView className="flex-1 bg-purple-50">
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <ImageBackground
                    source={{ uri: 'https://wallpapers.com/images/hd/4k-gaming-background-bud9k5ffqi3r2ds9.jpg' }}
                    className="w-full h-[300px]"
                    resizeMode="cover">

                    <TouchableOpacity className='px-3 py-2 rounded-lg flex-row justify-between'>
                        <View></View>
                        <Text className='font-semibold text-[17px] text-white'>
                            <Ionicons name="reorder-three-sharp" size={24} color="white" />
                        </Text>
                    </TouchableOpacity>

                    <View className="absolute bottom-[-40px] left-4 w-[100px] h-[100px]">
                        <Image
                            source={{ uri: 'https://i.pinimg.com/736x/83/1b/a9/831ba9ddb65f19434206273c90c55c2b.jpg' }}
                            className="w-full h-full rounded-full"
                            resizeMode="cover"
                        />
                    </View>
                </ImageBackground>

                <ScrollView className="mt-[40px]" showsVerticalScrollIndicator={false}>

                    <View className='px-5  bg-purple-400  py-3'>
                        <Text className="text-xl font-bold text-white">Manish</Text>

                    </View>
                    {/* update form of user */}
                    <View className='px-5 mt-7'>
                        <View>
                            <Text className='font-semibold text-[18px] mb-1'>Old Password</Text>
                            <TextInput className='border border-gray-300 px-2' secureTextEntry={true}
                                onChangeText={(text) => { ChangePass('old', text) }}
                            />

                        </View>

                        <View>
                            <Text className='font-semibold text-[18px] mb-1'>New Password</Text>
                            <TextInput className='border border-gray-300 px-2' secureTextEntry={true}
                                onChangeText={(text) => { ChangePass('new', text) }}
                            />

                        </View>
                        <View>
                            <Text className='font-semibold text-[18px] mb-1'>New Confirm Password</Text>
                            <TextInput className='border border-gray-300 px-2' secureTextEntry={true}
                                onChangeText={(text) => { ChangePass('confirm', text) }}
                            />

                        </View>
                        <View className='my-4'>
                            <TouchableOpacity className='w-auto bg-purple-800 px-6 py-2.5 rounded-lg' onPress={updatePassSubmit}>
                                <Text className='font-bold text-white text-center text-[19px]'>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Profile
