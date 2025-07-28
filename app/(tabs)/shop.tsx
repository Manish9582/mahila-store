import Navbar from '@/components/Navbar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const shop = () => {
    return (
        <SafeAreaView>
            <View className='px-2 py-1'>
                <Navbar />
            </View>
            <View>
                <Text>Shop</Text>
            </View>
        </SafeAreaView>
    )
}

export default shop

const styles = StyleSheet.create({})