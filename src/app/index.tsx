import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const index = () => {

  const insets = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, backgroundColor: 'red', marginBlockStart: insets.top, marginBlockEnd: insets.bottom }}>
      <Text>index</Text>
      <StatusBar barStyle={"dark-content"} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})