import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RestockReport from '../components/utilities/RestockReport'
import {
  setProductType,
  setShowUnavailable
} from '../modules/restockReport'

const mapStateToProps = ({ restockReport }) => ({
  showUnavailable: restockReport.showUnavailable,
  productType: restockReport.productType
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setProductType,
  setShowUnavailable
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestockReport)
