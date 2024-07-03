import { StyleSheet,ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import { useState } from 'react';
import CustomButton from "../../components/CustomButton";
import { Link } from 'expo-router';
import {createUser} from '../../lib/appwrite'

const SignUp = () => {

  // user field parameters
  const [form, setForm] = useState({
    username : '',
    email : '',
    password : ''
  })

  // submission loader
  const [isSubmitting, setIsSubmitting] = useState(false);

  // create user
  const submit = ()=>{
    createUser();
  };


  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView >
          <View className='w-full h-[90vh] justify-center px-4 my-7'>
              <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]'/>
              <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
                Sign Up
              </Text>
              <FormField 
              title='Username'
              value={form.username}
              handleChangeText={(e)=> setForm({...form, username : e})}
              otherStyles='mt-10'
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
              <CustomButton title='Sign Up' handlePress={submit} containerStyles='mt-7' isLoading={isSubmitting}/>
              <View className='justify-center flex-row pt-5 gap-2'>
                <Text className='text-gray-100 text-lg font-pregular'>Already have an account?</Text>
                <Link href='/sign-in' className='text-secondary-200 text-lg font-semibold'>Login</Link>
              </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})