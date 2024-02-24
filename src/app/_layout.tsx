import "../global.css";
import { Slot } from "expo-router";
import { SafeAreaView, StatusBar } from 'react-native';

export default function Layout() {
  return (
    <SafeAreaView className="bg-bkg" style={{ flex: 1, paddingTop: StatusBar.currentHeight || 0}}>
      <StatusBar />
      <Slot />
    </SafeAreaView>
  )
}
