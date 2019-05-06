import * as at from '../constants/action-types'

const initialState = {
    selectedCities: [],
    selectedCitiesValues: [],
    selectedCategories: [],
    selectedCategoriesValues: [],
    selectedSections: [],
    selectedSectionsValues: [],
}

const selectedFilters = (state=initialState, action) => {
    switch(action.type) {
        case at.ADD_ITEM_ID_TO_FILTER:
            return Object.assign({}, state, {
                [action.category]: state[action.category].concat(action.item)
            })
        case at.REMOVE_ITEM_ID_FROM_FILTER:
            return Object.assign({}, state, {
                [action.category]: state[action.category].filter(item => item !== action.item)
            })
        case at.ADD_ITEM_VALUE_TO_FILTER:
            return Object.assign({}, state, {
                [action.category+"Values"]: state[action.category+"Values"].concat(action.item)
            })
        case at.REMOVE_ITEM_VALUE_FROM_FILTER:
            return Object.assign({}, state, {
                [action.category+"Values"]: state[action.category+"Values"].filter(item => item !== action.item)
            })
        default:
            return state
    }
}

export default selectedFilters