export const CHANGE_FAVORITES = 'CHANGE_FAVORITES'
export const SET_FILTERS = 'SET_FILTERS'

export const changeFavorites = (id) => {
    return {type: CHANGE_FAVORITES, mealId: id}
}

export const setFilters = (filters) => {
    return {type: SET_FILTERS, filters: filters}
}