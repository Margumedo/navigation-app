
import CustomDrawer from '@/components/share/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';



const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                overlayColor: 'rgba(120, 4, 140, 0.4)',
                drawerActiveTintColor: 'purple',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Drawer.Screen
                name="user/index"
                options={{
                    drawerLabel: 'User',
                    title: 'Usuario',
                    drawerIcon: ({ color, size }) =>
                        <Ionicons name='person-circle-outline' size={size} color={color} />

                }}
            />
            <Drawer.Screen
                name="schedule/index"
                options={{
                    drawerLabel: 'Schedule',
                    title: 'Horario',
                    drawerIcon: ({ color, size }) => <Ionicons name='calendar-outline' color={color} size={size} />
                }}
            />


        </Drawer >
    )
}

export default DrawerLayout