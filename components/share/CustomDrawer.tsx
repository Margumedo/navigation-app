




import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props} scrollEnabled={false}>
            <View className='flex justify-center items-center bg-primary h-[150] rounded-xl m-3'>
                <View className='flex bg-white w-24 h-24 justify-center  rounded-full'>
                    <Text className='text-primary text-2xl font-work-black text-center'>MA</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}