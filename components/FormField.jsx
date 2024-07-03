import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  handleChangeText,
  otherStyles,
  title,
  value,
  keyboardType,
  placeholder,
  ...props
}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={`text-base text-gray-100 font-pmedium`}>{title}</Text>
      <View className="border-black-200 border-2 flex-row w-full h-16 focus:border-secondary rounded-2xl bg-black-100 items-center ">
        <TextInput
          value={value}
          className="text-base text-white flex-1 font-psemibold w-full"
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === "Password" && <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
            <Image source={!showPassword? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode="contain"/>
          </TouchableOpacity>}
      </View>
    </View>
  );
};

export default FormField;
