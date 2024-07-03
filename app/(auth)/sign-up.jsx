import { StyleSheet,ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
const SignUp = () => {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView >
          <View className='w-full h- justify-center px-4 my-7'>
              <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]'/>
              <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
                Sign Up
              </Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})