import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
const Navbar = () => {
  return (
    <View>
      <View className='flex-row w-full justify-between items-center'>
        <View className='w-[40px] h-[40px]'>
          <Image source={{ uri: 'https://i.pinimg.com/736x/83/1b/a9/831ba9ddb65f19434206273c90c55c2b.jpg' }} className='h-[100%] w-[100%] object-cover rounded-full' />
        </View>
        <View>
          <AntDesign name="setting" size={28} color="black" />
        </View>
      </View>
      <View className='my-2 px-2'>
        <TextInput className='border rounded-md px-2' placeholder='Search Item ....' />
      </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})