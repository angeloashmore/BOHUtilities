import React from 'react'
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native-macos'

import Link from './Link'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (r1, r2) => r1 !== r2
})

const renderRow = ({ title, route }) => (
  <Link to={route} activeStyle={{ backgroundColor: '#3392fd' }}>
    <View style={styles.row}>
      <Text style={styles.rowText}>{title}</Text>
    </View>
  </Link>
)

const renderSectionHeader = (firstSectionID) => (sectionData, sectionID) => (
  <View
    style={[
      styles.sectionHeader,
      sectionID === firstSectionID && styles.sectionHeaderFirst
    ]}>
    <Text style={styles.sectionHeaderText}>{sectionID}</Text>
  </View>
)

export default ({
  dataBlob
}) => {
  const dataSource = ds.cloneWithRowsAndSections(dataBlob)
  const firstSectionID = dataSource.getSectionIDForFlatIndex(0)
  const renderSectionHeaderWithFirstSectionID = renderSectionHeader(firstSectionID)

  return (
    <View style={styles.container}>
      <ListView
        dataSource={dataSource}
        renderRow={renderRow}
        renderSectionHeader={renderSectionHeaderWithFirstSectionID}
        showsVerticalScrollIndicator={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    paddingBottom: 2,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 11
  },
  sectionHeaderFirst: {
    paddingTop: 7
  },
  sectionHeaderText: {
    color: '#666',
    fontSize: 11,
    fontWeight: '500'
  },
  row: {
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 9,
    paddingTop: 4
  },
  rowActive: {
    backgroundColor: '#3392fd'
  },
  rowText: {
    color: '#404040',
    fontSize: 13
  },
  rowTextSelected: {
    color: '#fff',
    fontWeight: '300'
  }
})
