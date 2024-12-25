



import CustomButton from '@/components/share/CustomButton';
import { Link, router } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native'


const Home = () => {
    return (
        <SafeAreaView >
            <View className='m-10'>
                <Link href='/products' asChild>
                    <CustomButton color='primary' className='mb-3'>Products</CustomButton>
                </Link>
                <CustomButton
                    color='primary'
                    onPress={() => router.push('/products')}
                    className='mb-3'
                >Products
                </CustomButton>
                <CustomButton
                    color='primary'
                    onPress={() => router.push('/products')}
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