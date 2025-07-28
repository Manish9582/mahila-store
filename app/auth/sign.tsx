import AntDesign from '@expo/vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
];

const sign = () => {
    const [calenderHide, setcalenderHide] = useState<boolean>(false)
    const [emailError, setemailError] = useState<string>('')
    const [passError, setpassError] = useState<string>('')
    const [confirmError, setconfirmError] = useState<string>('')
    const [user, setuser] = useState<any>({
        name: '',
        age: '',
        dob: '',
        gender: '',
        counter: '',
        city: '',
        pincode: '',
        adress: '',
        email: '',
        password: ''
    })

    const handleInput = (key: string, Keyvalue: string) => {
        setuser((pre: any) => ({
            ...pre,
            [key]: Keyvalue.trim(),
        }));
    }
    const regexEmail: RegExp = /^\w+[a-zA-Z0-9]*@gmail\.com$/;
    const CheckValidationEmail = (data: string) => {
        if (!regexEmail.test(data.trim())) {
            setemailError('Email is not valid')
        } else {
            setemailError('')
        }
    };
    const CheckValidationPassword = (data: string) => {
        if (!/(?=.*[a-z])/.test(data)) {
            setpassError('Must contain at least one lowercase character');
            return;
        }

        if (!/(?=.*[A-Z])/.test(data)) {
            setpassError('Must contain at least one uppercase character');
            return;
        }

        if (!/(?=.*\d)/.test(data)) {
            setpassError('Must contain at least one number');
            return;
        }

        if (!/(?=.*[@$!%*?#&])/.test(data)) {
            setpassError('Must contain at least one special character');
            return;
        }

        if (!/^.{8,}$/.test(data)) {
            setpassError('Must be at least 8 characters long');
            return;
        }
        setpassError('');

    };
    const MatchConfimPass = (data: string) => {
        if (user.password != data) {
            setconfirmError('Password is did not match');
            return;
        }
        setconfirmError('')
    }

    return (
        <SafeAreaView className='bg-purple-50 pb-10'>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View className="flex-1">
                        <View className='w-full h-[400px]'>
                            <Image source={require('@/assets/images/logo.png')} className='w-full h-[100%]' />
                        </View>
                        {/* Forms data */}
                        <View className='px-6'>
                            <View className='my-6'>
                                <Text className='underline text-[22px] font-bold'>Ragistration</Text>
                            </View>
                            <View>
                                <Text className='font-semibold text-[18px] mb-1'>Name</Text>
                                <TextInput className='border border-gray-300 px-2 rounded-md'
                                    onChangeText={(text) => handleInput('name', text)} value={user.name}
                                />
                            </View>
                            <View>
                                <Text className='font-semibold text-[18px] mb-1'>Gender</Text>
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={{ color: 'black' }}
                                    selectedTextStyle={{ color: '#111827', fontSize: 16 }}
                                    data={genderOptions}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select gender"
                                    value={user.gender}
                                    onChange={item => {
                                        handleInput('gender', item.value);
                                    }}
                                />
                            </View>
                            <View>
                                <Text className='font-semibold text-[18px] mb-1'>DOB</Text>
                                <View className='flex-row items-center justify-between border border-gray-300 py-2.5 px-1.5 rounded-lg'>
                                    <Text>
                                        <Text>{user.dob}</Text>
                                    </Text>
                                    <AntDesign name="calendar" size={24} color="black" onPress={() => setcalenderHide(true)} />
                                </View>
                                {calenderHide && (<DateTimePicker
                                    value={user.dob ? new Date(user.dob) : new Date()}
                                    mode="date"
                                    display="default"
                                    onChange={(event, selectedDate) => {
                                        if (selectedDate) {
                                            const formattedDate = selectedDate.toISOString().split('T')[0];
                                            handleInput('dob', formattedDate);
                                            setcalenderHide(false)
                                        }
                                    }}
                                />)}
                            </View>
                            <View>
                                <Text className='font-semibold text-[18px] mb-1'>Age</Text>
                                <TextInput className='border border-gray-300 px-2' keyboardType='numeric'
                                    onChangeText={(numeric) => handleInput('age', numeric)}
                                />
                            </View>
                            <View>
                                <Text className='font-semibold text-[18px] mb-1'>Address</Text>
                                <TextInput className='border border-gray-300 px-2'
                                    onChangeText={(text) => handleInput('address', text)}
                                />
                            </View>
                            <View>
                                <Text className='font-semibold text-[18px] mb-1'>Country</Text>
                                <TextInput className='border border-gray-300 px-2'
                                    onChangeText={(text) => handleInput('country', text)}
                                />
                            </View>
                            <View>
                                <Text className='font-semibold text-[18px] mb-1'>City</Text>
                                <TextInput className='border border-gray-300 px-2'
                                    onChangeText={(text) => handleInput('city', text)}
                                />
                            </View>
                            <View>
                                <Text className='font-semibold text-[18px] mb-1'>Pincode</Text>
                                <TextInput className='border border-gray-300 px-2' keyboardType='numeric'
                                    onChangeText={(numeric) => handleInput('pincode', numeric)}
                                />
                            </View>
                            <View>
                                <Text className='font-semibold text-[18px] mb-1'>Email</Text>
                                <TextInput className='border border-gray-300 px-2' keyboardType='email-address'
                                    onChangeText={(text) => {
                                        handleInput('email', text);
                                        CheckValidationEmail(text);
                                    }}
                                />
                                {emailError && (
                                    <Text className='my-2 text-rose-600 text-[17px]'>{emailError}</Text>
                                )}
                            </View>
                            <View>
                                <Text className='font-semibold text-[18px] mb-1'>Password</Text>
                                <TextInput className='border border-gray-300 px-2' secureTextEntry={true}
                                    onChangeText={(text) => {
                                        handleInput('password', text),
                                            CheckValidationPassword(text)
                                    }}
                                />
                                {passError && (
                                    <Text className='my-2 text-rose-600 text-[17px]'>{passError}</Text>
                                )}
                            </View>
                            <View>
                                <Text className='font-semibold text-[18px] mb-1'>Confirm Password</Text>
                                <TextInput className='border border-gray-300 px-2' secureTextEntry={true}
                                    onChangeText={(text) => {
                                        MatchConfimPass(text)
                                    }}
                                />
                                {confirmError && (
                                    <Text className='my-2 text-rose-600 text-[17px]'>{confirmError}</Text>
                                )}
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
        </SafeAreaView>
    )
}

export default sign

const styles = StyleSheet.create({
    dropdown: {
        height: 48,
        borderColor: '#D1D5DB',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
    },
})