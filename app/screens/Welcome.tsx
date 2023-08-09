import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import TableExample from '../components/DataTable';
import TopTable from '../components/topTable';

const Welcome = () => {

  const navigation = useNavigation()
  return (
  //  <SafeAreaView className='h-full flex justify-around bg-zinc-900'>
   <SafeAreaView className='h-full bg-[#112D4E] pt-10'>
 
   <View className='flex-col justify-center '>
    <TopTable />
    {/* <Image source={require('../../assets/images/brainckt.png')} className='w-60 h-60' /> */}
    {/* <Table /> */}
    <TableExample />
    {/* <Table /> */}
     </View>
     {/* <TouchableOpacity onPress={()=> navigation.navigate('Home')} className='bg-black mx-5 p-3.5 rounded-xl' >
      <Text className='text-gray-200 font-semibold text-lg text-center'>Get Started</Text>
     </TouchableOpacity> */}
   </SafeAreaView>
  )
}

export default Welcome