


import { Link, Redirect } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'


const App = () => {
    return (

        <Redirect href={"./home"} ></Redirect>
        // <SafeAreaView>
        //     <View className='m-5 '>
        //         <Text className='text-4xl font-work-black text-primary'>Hola desde el Home</Text>
        //         <Text className='text-3xl font-work-medium text-secondary'>Hola desde el Home</Text>
        //         <Text className='text-2xl font-work-light text-tertiary'>Hola desde el Home</Text>
        //         <Text className='text-xl text-secondary-200'>Hola desde el Home</Text>

        //         <Link href={"./products"}>Click me</Link>

        //     </View>
        // </SafeAreaView>

    )
}

export default App