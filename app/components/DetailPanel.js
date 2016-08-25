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
    backgroundColor: '#f2f2f2',
    flex: 1
  }
})
