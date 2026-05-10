import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';



const index = () => {
  return (
    <SafeAreaView>
      <StatusBar style='dark' />
      <View style={styles.card}>
        <Text style={styles.title}>index</Text>
        <Text style={styles.subTitle}>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    margin: 16,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8
  },
  title: {},
  subTitle: {}
})