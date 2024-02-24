import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { router } from 'expo-router';

export default function Page() {
  return (
    <View className="flex flex-1 items-center gap-5 text-txt mt-10">
      <Text className="font-bold text-5xl text-black">Welcome to</Text>
      <Text className="font-bold text-4xl">logo</Text>
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
    </View>
  );
}
