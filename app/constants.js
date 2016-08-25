import Enum from 'node-enumjs'

export const ProductTypes = Enum.define('ProductTypes', [
  'Accessories',
  'Serialized',
  'ServiceParts'
])
