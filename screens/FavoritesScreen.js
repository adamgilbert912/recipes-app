import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import MealItem from '../Components/MealItem'
import { useSelector } from 'react-redux'

const FavoritesScreen = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    if (favoriteMeals.length === 0) {
        return <View style={styles.fallbackView}><Text style={styles.fallbackText} numberOfLines={2}>You haven't set any favorites yet. Set some now!</Text></View>
    }

    const renderMealItems = (itemData) => {

        const isfavMeal = favoriteMeals.some(meal => meal.id === itemData.item.id)

        return (
            <MealItem
                onPress={() => props.navigation.navigate({ routeName: 'MealDetailScreen', params: { title: itemData.item.title, ingredients: itemData.item.ingredients, steps: itemData.item.steps, imageSource: itemData.item.imageUrl, duration: itemData.item.duration, complexity: itemData.item.complexity, affordibility: itemData.item.affordibility, id: itemData.item.id, isFav: isfavMeal } })}
                imageSource={itemData.item.imageUrl}
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordibility={itemData.item.affordibility}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList contentContainerStyle={styles.list} data={favoriteMeals} renderItem={renderMealItems} keyExtractor={(item, index) => item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    list: {
        alignItems: 'center'
    },
    
    fallbackView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    fallbackText: {
        fontFamily: 'fontBold',
        fontSize: 22,
        textAlign: 'center'
    }
})

export default FavoritesScreen;