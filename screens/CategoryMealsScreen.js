import React from 'react'
import {View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {useSelector} from 'react-redux'
import DefaultText from '../Components/DefaultText'

import MealItem from '../Components/MealItem'

const CategoryMealsScreen = props => {

    const filteredMeals = useSelector(state => state.meals.filteredMeals)
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const mealsData = filteredMeals.filter((meal) => meal.categoryIds.indexOf(props.navigation.getParam('id')) >= 0)

    const renderListItem = itemData => {
        const isfavMeal = favoriteMeals.some(meal => meal.id === itemData.item.id)
        return <MealItem
            onPress={() => props.navigation.navigate({ routeName: 'MealDetailScreen', params: { title: itemData.item.title, ingredients: itemData.item.ingredients, steps: itemData.item.steps, imageSource: itemData.item.imageUrl, duration: itemData.item.duration, complexity: itemData.item.complexity, affordibility: itemData.item.affordibility, id: itemData.item.id, isFav: isfavMeal} })}
            imageSource={itemData.item.imageUrl}
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordibility={itemData.item.affordibility}
        />
    }

    if (mealsData.length === 0) {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><DefaultText style={{fontSize: 15, textAlign: 'center'}}>There's no meals in this category. Check your filters!</DefaultText></View>
    }

    return (
        <View style={styles.container}>
        <FlatList contentContainerStyle={styles.list} keyExtractor={(item, index) =>  item.id } data={mealsData} renderItem={renderListItem} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryName = navigationData.navigation.getParam('title')

    return { headerTitle: categoryName }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    list: {
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;