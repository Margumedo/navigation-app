


import { View, Text, FlatList } from 'react-native'

import { productsList } from '@/store/products.store';
import { Link } from 'expo-router';

const storeProducts = productsList;

const products = () => {
    return (
        <View className=' flex flex-1'>
            <FlatList
                data={storeProducts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className='px-5 mt-5'>
                        <Text className='text-2xl font-work-black'>{item.title}</Text>
                        <Text>{item.description}</Text>

                        <View className='flex flex-row mt-2 justify-between'>
                            <Text className=' text-xl font-work-black'>{item.price}</Text>
                            <Link href={`/tabs/products/${item.id}`} className='text-primary'>
                                Ver Más
                            </Link>
                        </View>

                    </View>
                )}
            />
        </View>
    )
}

export default products