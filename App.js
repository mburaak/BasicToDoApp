import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainScreen from "./Screens/MainScreen";
import Header from "./Components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="To Do App" />
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
