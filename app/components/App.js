import fs from 'fs'
import React from 'react'
import { StyleSheet, View } from 'react-native-macos'

import MasterPanel from '../components/MasterPanel'
import DetailPanel from '../components/DetailPanel'

const dataBlob = {
  'Tasks': [
    { title: 'Restock Report', route: '/restock-report' },
    { title: 'In-Transit Expected', route: '/in-transit-expected' },
    { title: 'Text Label', route: '/text-label' },
  ],
  'Advanced Tasks': [
    { title: 'Update Categories', route: '/update-categories' },
  ]
}

export default ({
  children
}) => (
  <View style={styles.container}>
    <View style={styles.masterPanel}>
      <MasterPanel dataBlob={dataBlob} />
    </View>
    <View style={styles.detailPanel}>
      <DetailPanel>{children}</DetailPanel>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  masterPanel: {
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
    borderRightWidth: 1,
    width: 175
  },
  detailPanel: {
    flex: 1
  }
})
