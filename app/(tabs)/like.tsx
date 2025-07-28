import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '@/components/Navbar'

const like = () => {
    return (
        <SafeAreaView>
             <View className='px-2 py-1'>
        <Navbar />
      </View>
            <View>
                <Text>Like</Text>
            </View>
        </SafeAreaView>
    )
}

export default like

const styles = StyleSheet.create({})