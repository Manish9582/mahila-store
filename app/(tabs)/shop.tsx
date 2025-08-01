import Navbar from '@/components/Navbar'
import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const Shop = () => {
   const buySelctor= useSelector((state:any)=>state.buy.buy)
   console.log(buySelctor)
    return (
        <SafeAreaView className='flex-1'>
            <View className='px-2 py-1'>
                <Navbar />
            </View>
            <ScrollView className='px-3'>
                <View className='my-3'>
                    {buySelctor.length > 0 ?
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
                    {buySelctor.length > 0 && (
                        <View className='flex-row gap-2 flex-wrap'>
                            {buySelctor.map((data: any ,index:string) => {
                                return (
                                    <View key={index.toString()} className='w-[48.80%] h-[auto] bg-white rounded-b-xl'>
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
                                                <TouchableOpacity>
                                                    <Text className='bg-green-600 text-white px-4 py-2 rounded-md'>Buy</Text>
                                                </TouchableOpacity>
                                                <AntDesign name="hearto" size={24} color="black" />                                            </View>
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

export default Shop

const styles = StyleSheet.create({})