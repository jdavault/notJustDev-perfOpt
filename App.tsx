/** @format */

import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet } from "react-native"
import HomeScreen from "./screens/HomeScreen"
import { connectToDevTools } from "react-devtools-core"

const isInDebugMode = () => {
  return eval("__DEV__")
}
if (isInDebugMode()) {
  connectToDevTools({
    host: "localhost",
    port: 8097
  })
}

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <HomeScreen />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  }
})
