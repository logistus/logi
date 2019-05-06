import * as at from '../constants/action-types'

export const addItemIdToFilter = (category, item) => ({
    type: at.ADD_ITEM_ID_TO_FILTER,
    category,
    item
})

export const removeItemIdFromFilter = (category, item) => ({
    type: at.REMOVE_ITEM_ID_FROM_FILTER,
    category,
    item
})

export const addItemValueToFilter = (category, item) => ({
    type: at.ADD_ITEM_VALUE_TO_FILTER,
    category,
    item
})

export const removeItemValueFromFilter = (category, item) => ({
    type: at.REMOVE_ITEM_VALUE_FROM_FILTER,
    category,
    item
})