import { StyleSheet,ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import { useState } from 'react';
const SignUp = () => {
  const [form, setForm] = useState({
    username : '',
    email : '',
    password : ''
  })
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView >
          <View className='w-full h- justify-center px-4 my-7'>
              <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]'/>
              <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
                Sign Up
              </Text>
              <FormField 
              title='Username'
              value={form.username}
              handleChangeText={(e)=> setForm({...form, username : e})}
              otherStyles='mt-7'
              />
              <FormField 
              title='Email'
              value={form.email}
              handleChangeText={(e)=> setForm({...form, email : e})}
              otherStyles='mt-7'
              keyboardType='email-address'
              />
              <FormField 
              title='Password'
              value={form.password}
              handleChangeText={(e)=> setForm({...form, password : e})}
              otherStyles='mt-7'
              // placeholder={}
              />
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})