import typeToReducer from 'type-to-reducer'
import { createAction } from 'redux-actions'

import { ProductTypes } from '../constants'

const SET_DOCUMENT_PATH = 'BOHUtilities/restockReport/SET_DOCUMENT_PATH'
const SET_PRODUCT_TYPE = 'BOHUtilities/restockReport/SET_PRODUCT_TYPE'
const SET_SHOW_UNAVAILABLE = 'BOHUtilities/restockReport/SET_SHOW_UNAVAILABLE'

const initialState = {
  documentPath: null,
  productType: ProductTypes.Accessories,
  showUnavailable: true
}

export default typeToReducer({
  [SET_DOCUMENT_PATH]: (state, { payload }) => ({
    ...state,
    documentPath: payload
  }),
  [SET_PRODUCT_TYPE]: (state, { payload }) => ({
    ...state,
    productType: payload
  }),
  [SET_SHOW_UNAVAILABLE]: (state, { payload }) => ({
    ...state,
    showUnavailable: Boolean(payload)
  })
}, initialState)

export const setDocumentPath = createAction(SET_DOCUMENT_PATH)

export const setProductType = createAction(SET_PRODUCT_TYPE)

export const setShowUnavailable = createAction(SET_SHOW_UNAVAILABLE)
