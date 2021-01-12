import { MEALS } from '../../data/dummy-data'
import { CHANGE_FAVORITES, SET_FILTERS } from '../Actions/meals'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_FAVORITES: {
            const index = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)

            if (index >= 0) {
                const favoriteMeals = [...state.favoriteMeals]
                favoriteMeals.splice(index, 1)
                return { ...state, favoriteMeals: favoriteMeals }
            } else {
                const mealToAdd = state.meals.find(meal => meal.id === action.mealId)
                console.log(mealToAdd)
                return { ...state, favoriteMeals: state.favoriteMeals.concat(mealToAdd) }
            }

        }

        case SET_FILTERS: {
            const newFilteredMeals = state.meals.filter(meal => {
                if (action.filters.isGlutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (action.filters.isLactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (action.filters.isVegetarian && !meal.isVegetarian) {
                    return false;
                }
                if (action.filters.isVegan && !meal.isVegan) {
                    return false;
                }

                return true;
            })

            return {...state, filteredMeals: newFilteredMeals}
        }

        default: {
            return state
        }
    }

}

export default mealsReducer

