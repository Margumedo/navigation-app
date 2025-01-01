
import { Ionicons } from '@expo/vector-icons';

import { Tabs } from 'expo-router'

import * as NavigationBar from 'expo-navigation-bar';

NavigationBar.setBackgroundColorAsync('white');

const tabsLayout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'violet', headerShadowVisible: false }}>
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'User',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-outline" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default tabsLayout