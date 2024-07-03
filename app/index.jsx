import { ScrollView,Image, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

const App = () => {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView contentContainerStyle={{height : '100%'}}>
        <View className='w-full h-full justify-start items-center px-4'>
            <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain'/>
            <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode='contain'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App