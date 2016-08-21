import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native-macos'

export default () => {
  return (
    <View style={styles.container}>
      <Text>Render the Text Label here</Text>
      <Text>Render the Text Label here</Text>
      <Text>Render the Text Label here</Text>
      <Text>Render the Text Label here</Text>
      <Text>Render the Text Label here</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 38
  }
})
