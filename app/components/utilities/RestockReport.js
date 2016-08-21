import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native-macos'

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
      </View>
      <View style={styles.sidePanel}>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 1
  },
  sidePanel: {
    backgroundColor: '#f2f2f2',
    borderLeftColor: 'rgba(0, 0, 0, 0.1)',
    borderLeftWidth: 1.5,
    width: 250
  }
})
