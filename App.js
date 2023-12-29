// import { StatusBar } from "expo-status-bar";
import React from "react";
import {  StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { Header } from "./src/Header";
import {SafeAreaProvider, SafeAreaView as Safe} from 'react-native-safe-area-context';
// import { moderateScale } from "react-native-size-matters";
import {NavigationContainer} from '@react-navigation/native';
import { MyStack } from "./navigation/PlantNavigator";


export default function App() {
  return (
    <SafeAreaProvider >
      <Safe style={styles.container}>
        <SafeAreaView style={{flex:1 }}>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </SafeAreaView>
      </Safe>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: 'center',
  },
  subContainer: {
    flex:1,
    // borderWidth:1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignItems: "center",
    justifyContent: 'flex-start',   
  },
});
