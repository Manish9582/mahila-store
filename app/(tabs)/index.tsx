import { imagesCate } from '@/components/CategoryImg';
import Navbar from '@/components/Navbar';
import { BuyDataFun, LikeDataFun } from '@/redux/actions';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import data from '../../components/data.json';
const CardImg = [
  'https://m.media-amazon.com/images/I/71mX4WATh-L._SX679_.jpg',
  'https://m.media-amazon.com/images/I/81OS4czw-AL._AC_UL480_FMwebp_QL65_.jpg',
  'https://m.media-amazon.com/images/I/61t5Rq80yeL._SY879_.jpg',
  'https://m.media-amazon.com/images/I/611ra+a6mjL._AC_UL480_FMwebp_QL65_.jpg'
];
const Home = () => {
  const dispatch = useDispatch();
  const HandleDispchBuy: any = (id: any) => {
    dispatch(BuyDataFun(id))
  }
  const HandleDispchLike: any = (id: any) => {
    dispatch(LikeDataFun(id))
  }

  return (
    <SafeAreaView className='bg-purple-50 h-full'>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View className='px-2 py-1'>
          <Navbar />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className='px-2  h-auto py-2 mb-[100px]'>

            {/* show  popular item */}
            <View className='px-2'>
              <Text className='text-2xl font-bold my-2 '>Popular Items</Text>
              <View className='flex-row w-full flex-wrap gap-3'>
                {CardImg.map((data, index) => {
                  return (
                    <View key={index.toString()} className='w-[48%] h-[150px] bg-white  rounded-lg'>
                      <Image source={{ uri: `${data}` }} className='w-[100%] h-[100%]' resizeMode='contain' />
                    </View>
                  )
                })}
              </View>
            </View>

            {/* show categories */}

            <View className='px-2 mt-4'>
              <Text className='text-2xl font-bold my-2 '>Category</Text>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ flexDirection: 'row', gap: 10 }}
              >
                {imagesCate.map((data, index) => (
                  <View key={index.toString()} className='w-[80px] h-[80px] mr-2 rounded-full'>
                    <Image
                      source={{ uri: data }}
                      className='w-full h-full rounded-full'
                      resizeMode='cover'
                    />
                  </View>
                ))}
              </ScrollView>
            </View>

            <View className='px-2 mt-4'>
              <Text className='text-2xl font-bold my-2 '>Products</Text>
              <View className='flex-row gap-2 flex-wrap'>
                {data.map((data: any) => (
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
                        <AntDesign name="hearto" size={24} color="black" onPress={() => { HandleDispchLike(data.id) }} />
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>


          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Toast />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})