import { connect } from 'react-redux'
import Filter from '../components/Filter'

import { addItemIdToFilter, removeItemIdFromFilter, addItemValueToFilter, removeItemValueFromFilter } from '../actions'

/* const mapStateToProps = (state, ownProps) => {
    return {
        [ownProps.category]: state[ownProps.category],
    }
} */

const mapDispatchToProps = dispatch => ({
    addItemIdToFilter: (category, item) => dispatch(addItemIdToFilter(category, item)),
    addItemValueToFilter: (category, item) => dispatch(addItemValueToFilter(category, item)),
    removeItemIdFromFilter: (category, item) => dispatch(removeItemIdFromFilter(category, item)),
    removeItemValueFromFilter: (category, item) => dispatch(removeItemValueFromFilter(category, item)),
})

export default connect(null, mapDispatchToProps)(Filter)