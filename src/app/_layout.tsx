import "../global.css";
import { Slot } from "expo-router";
import { useColorScheme, SafeAreaView, StatusBar } from 'react-native';
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function Layout() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView className="bg-bkg" style={{ flex: 1, paddingTop: StatusBar.currentHeight || 0}}>
      <StatusBar />
      <Slot />
    </SafeAreaView>
  )
}
