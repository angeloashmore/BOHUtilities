import React from 'react'
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native-macos'

import { ProductTypes } from '../../constants'

export default ({
  productType,
  setProductType,
  setShowUnavailable,
  showUnavailable
}) => {
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
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={styles.sidePanelOption}>
            <View style={styles.sidePanelOptionDetails}>
              <Text style={styles.sidePanelOptionTitle}>Product Type</Text>
              <Text style={styles.sidePanelOptionDescription}>Only include products of this type</Text>
            </View>
            <Button
              onClick={(e) => setProductType(ProductTypes.Accessories)}
              style={styles.sidePanelOptionRadio}
              title='Accessories'
              type='radio'
              value={productType === ProductTypes.Accessories}
            />
            <Button
              onClick={(e) => setProductType(ProductTypes.Serialized)}
              style={styles.sidePanelOptionRadio}
              title='Serialized'
              type='radio'
              value={productType === ProductTypes.Serialized}
            />
            <Button
              onClick={(e) => setProductType(ProductTypes.ServiceParts)}
              style={styles.sidePanelOptionRadio}
              title='Service Parts'
              type='radio'
              value={productType === ProductTypes.ServiceParts}
            />
          </View>
          <View style={styles.sidePanelOption}>
            <View style={styles.sidePanelOptionDetails}>
              <Text style={styles.sidePanelOptionTitle}>SAP Export Location</Text>
              <Text style={styles.sidePanelOptionDescription}>Location of SAP Restock Report exported XLSX file</Text>
            </View>
            <Button type='switch' title='Accessories' style={styles.sidePanelOptionRadio} />
          </View>
          <View style={styles.sidePanelOption}>
            <View style={styles.sidePanelOptionDetails}>
              <Text style={styles.sidePanelOptionTitle}>Unavailable Products</Text>
              <Text style={styles.sidePanelOptionDescription}>Show or hide unavailable products</Text>
            </View>
            <Button
              onClick={(e) => setShowUnavailable(e.nativeEvent.state)}
              style={styles.sidePanelOptionRadio}
              title='Show unavailable products'
              type='switch'
              value={showUnavailable}
            />
          </View>
        </ScrollView>
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
    backgroundColor: '#fff',
    flex: 1
  },
  sidePanel: {
    borderLeftColor: 'rgba(0, 0, 0, 0.1)',
    borderLeftWidth: 1.5,
    paddingTop: 38,
    width: 250
  },
  sidePanelOption: {
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    padding: 16
  },
  sidePanelOptionDetails: {
    marginBottom: 8
  },
  sidePanelOptionTitle: {
    fontSize: 11,
    fontWeight: '500',
    marginBottom: 4
  },
  sidePanelOptionDescription: {
    color: '#7f7f7f',
    fontSize: 10
  },
  sidePanelOptionRadio: {
    width: 218
  }
})
