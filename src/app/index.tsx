import React from "react";
import { Appearance, Text, TouchableOpacity, View } from "react-native";
import { router } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Page() {
  const toggleTheme = async () => {
    const theme = await getTheme() === "light" ? "dark" : "light";
    AsyncStorage.setItem("theme", theme)
    setTheme(theme)
    theme === "dark" ? Appearance.setColorScheme("dark") : Appearance.setColorScheme("light")
  }
  const getTheme = async() => {
    const key = await AsyncStorage.getItem("theme")
    return key
  }
  const [theme, setTheme] = React.useState("light")
  React.useEffect(() => {
    const fetchTheme = async () => {
      const theme = await getTheme()
      setTheme(theme) 
      console.log(theme)
      theme === "dark" ? Appearance.setColorScheme("dark") : Appearance.setColorScheme("light")
    }
    fetchTheme()
  }, [])
  return (
    <View className="flex flex-1 items-center gap-5 text-txt mt-10">
      <Text className="font-bold text-5xl text-txt">Welcome to</Text>
      <Text className="font-bold text-4xl text-txt">logo</Text>
      <Text className="text-wtxt text-xl">Sign in with</Text>
      <View className="flex flex-row gap-5 mt-10">
        <TouchableOpacity className="bg-primary w-32 h-10 justify-center items-center" onPress={() => {router.push("/signin")}}>
          <Text className="text-bkg">Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-primary w-32 h-10 justify-center items-center" onPress={() => {router.push("/signin")}}>
          <Text className="text-bkg">Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-primary w-32 h-10 justify-center items-center" onPress={() => {router.push("/signin")}}>
          <Text className="text-bkg">Click Me</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="bg-primary w-32 h-10 justify-center items-center" onPress={() => {toggleTheme()}}>
        <Text className="text-bkg">{theme}</Text>
      </TouchableOpacity>
    </View>
  );
}
