
import { Stack } from 'expo-router'
import { View, Text } from 'react-native'


const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                // headerShown: false,
                headerShadowVisible: false,
                animationDuration: 2000,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}

        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Home',
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Products',
                    animation: 'slide_from_right'
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Profile',
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Settings',
                }}
            />

        </Stack>
    )
}

export default StackLayout