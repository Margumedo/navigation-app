


import { productsList } from '@/store/products.store';
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native'


const productDetail = () => {

    const { id } = useLocalSearchParams();

    const product = productsList.find((item) => item.id === id)

    return (
        <View className='px-3 gap-y-4'>
            <Text className='text-2xl font-work-black'>{product?.title}</Text>
            <Text>{product?.description}</Text>
            <Text className='text-xl font-work-black'>{product?.price}</Text>

        </View>
    )
}

export default productDetail;