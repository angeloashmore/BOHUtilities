import React from 'react'
import { StyleSheet, View } from 'react-native-macos'

export default ({
  children
}) => (
  <View style={styles.container}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
})
