import { StyleSheet,ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
const SignIn = () => {
  const [form, setForm] = useState({
    email : '',
    password : ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = ()=>{}
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView >
          <View className='w-full h- justify-center px-4 my-7'>
              <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]'/>
              <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
                Sign In
              </Text>
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
              <CustomButton title='Log In' handlePress={submit} containerStyles='mt-7' isLoading={isSubmitting}/>
              <View className='justify-center flex-row pt-5 gap-2'>
                <Text className='text-gray-100 text-lg font-pregular'>Don't have an account?</Text>
                <Link href='/sign-up' className='text-secondary-200 text-lg font-semibold'>Sign Up</Link>
              </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})