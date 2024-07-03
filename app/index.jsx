import { ScrollView, Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

const App = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-start items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white text-center font-bold">
              Discover Endless Possibilities With {' '}{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image source={images.path} className='w-[136px] h-[15px] absolute -bottom-2 -right-8' resizeMode="contain"/>
          </View>
          <Text className='text-center text-gray-100 text-sm font-pregular mt-7'>
          Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
