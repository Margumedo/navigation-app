



import CustomButton from '@/components/share/CustomButton';
import { Link, router } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native'


const Home = () => {
    return (
        <SafeAreaView >
            <View className='px-10'>

                <CustomButton
                    color='primary'
                    onPress={() => router.push('/tabs/products')}
                    className='mb-3'
                >Productos
                </CustomButton>
                <CustomButton
                    color='secondary'
                    onPress={() => router.push('/tabs/profile')}
                    className='mb-3'
                >Perfil
                </CustomButton>

                <CustomButton
                    color='tertiary'
                    onPress={() => router.push('/tabs/settings')}
                    className='mb-3'
                >Ajustes
                </CustomButton>


                <CustomButton
                    color='primary'
                    onPress={() => router.push('/tabs/products')}
                    variant='text-only'
                    className='mb-3'
                >Products
                </CustomButton>
            </View>

            {/* <View className='bg-red-400 px-10'>
                <Link className='mb-10' href={"./products"} >Products</Link>
                <Link className='mb-10' href={"./profile"} >Profile</Link>
                <Link className='mb-10' href={"./settings"} >Settings</Link>
            </View> */}

        </SafeAreaView >
    )
}

export default Home;