import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Happy Phone</Text>
      {/* <StatusBar style='auto'/> */}
      <Link href="/profile" className='text-blue-400 mt-8'>Go to Profile</Link>
    </View>
  )
}

export default App