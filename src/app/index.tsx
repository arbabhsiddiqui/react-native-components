import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const index = () => {

  const insets = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, marginBlockStart: insets.top, marginBlockEnd: insets.bottom }}>
      <Text>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})