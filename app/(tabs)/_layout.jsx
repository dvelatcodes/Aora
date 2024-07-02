import { StyleSheet, Text, View } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name='home' options={{title: "Home", headerShown: false, tabBarIcon: ({color})=> <MaterialIcons name='home' color={color} size={24} />, tabBarActiveTintColor: "#FFA001", tabBarInactiveTintColor: "#CDCDE0"}}/>
        <Tabs.Screen name='bookmark' options={{title:"Bookmark", headerShown: false, tabBarIcon: ({color})=> <MaterialIcons name='bookmark' color={color} size={24}/>, tabBarActiveTintColor: "#FFA001", tabBarInactiveTintColor: "#CDCDE0"}}/>
        <Tabs.Screen name='create' options={{title: "Create", headerShown: false, tabBarIcon: ({color})=> <MaterialIcons name='add' color={color} size={24}/>, tabBarActiveTintColor: "#FFA001", tabBarInactiveTintColor: "#CDCDE0"}} />
        <Tabs.Screen name='profile' options={{title: "Profile", headerShown: false, tabBarIcon: ({color})=> <MaterialIcons name='person' color={color} size={24}/>, tabBarActiveTintColor: "#FFA001", tabBarInactiveTintColor: "#CDCDE0"}}/>
      </Tabs> 
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})