import Navbar from '@/components/Navbar'
import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'


const Like = () => {
    const LikeData = useSelector((data: any) => data.buy.like);

    const dispatch = useDispatch();
    const HandleDispchBuy: any = (id: any) => {
        dispatch(HandleDispchBuy(id))
    }
    return (
        <SafeAreaView className='flex-1'>
            <View className='px-2 py-1'>
                <Navbar />
            </View>
            <ScrollView className='px-3'>
                <View className='my-3'>
                    {LikeData.length > 0 ?
                        (
                            <Text className="text-black font-bold text-2xl">Your favorate product</Text>
                        ) :
                        (
                            <Text className="text-red-700 font-bold text-2xl">
                                You didn't like any item
                            </Text>
                        )}
                </View>
                <View>
                    {LikeData.length > 0 && (
                        <View className='flex-row gap-2 flex-wrap'>
                            {LikeData.map((data: any) => {
                                return (
                                    <View key={data.id} className='w-[48.80%] h-[auto] bg-white rounded-b-xl'>
                                        <View className='w-[100%] h-[150px]'>
                                            <Image
                                                source={{ uri: data.image }}
                                                className='w-full h-full rounded-t-xl'
                                                resizeMode='cover'
                                            />
                                        </View>
                                        <View className='py-3.5 px-2.5 '>
                                            <Text numberOfLines={1} ellipsizeMode="tail" className='text-base '>
                                                Name: {data.name}
                                            </Text>
                                            <Text>Price :{data.price}</Text>

                                            <View className='flex-row justify-between items-center mt-3'>
                                                <TouchableOpacity onPress={() => { HandleDispchBuy(data.id) }}>
                                                    <Text className='bg-green-600 text-white px-4 py-2 rounded-md'>Buy</Text>
                                                </TouchableOpacity>
                                                <AntDesign name="heart" size={24} color="red" />                                            </View>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Like

const styles = StyleSheet.create({})