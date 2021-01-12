import React, { useEffect, useCallback } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import DefaultText from '../Components/DefaultText'
import {useDispatch, useSelector} from 'react-redux'
import {changeFavorites} from '../Store/Actions/meals'

import FavoriteButton from '../Components/FavoriteButton'
import Colors from '../Constants/Colors'

const MealDetailScreen = props => {

    const dispatch = useDispatch()

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    const isFav = favoriteMeals.some(meal => meal.id === props.navigation.getParam('id'))

    const changeFavoritesHandler = useCallback(id => {
        dispatch(changeFavorites(id))
    }, [changeFavorites])

    useEffect(() => {
        props.navigation.setParams({favoritesHandler: changeFavoritesHandler})
    },[changeFavoritesHandler])

    useEffect(() => {
        props.navigation.setParams({isFav: isFav})
    }, [isFav])

    const mealDetails = {
        title: props.navigation.getParam('title'),
        ingredients: props.navigation.getParam('ingredients'),
        steps: props.navigation.getParam('steps'),
        imageUrl: props.navigation.getParam('imageSource'),
        duration: props.navigation.getParam('duration'),
        complexity: props.navigation.getParam('complexity'),
        affordibilty: props.navigation.getParam('affordibility')
    }

    const createListItem = (item) => {
        return (
            <View key={item} style={{...styles.listItemView, borderColor: isFav ? 'orange' : Colors.primary}}><DefaultText style={{ fontSize: Dimensions.get('window').height > 700 ? 18 : 16 }}>{item}</DefaultText></View>
        )
    }

    return (
            <ScrollView contentContainerStyle={styles.list}>
                <Image style={styles.image} source={{ uri: mealDetails.imageUrl }} />
                <View style={styles.detailsContainer}>
                    <DefaultText style={{ ...styles.detailsText, textAlign: 'left' }}>{mealDetails.duration}m</DefaultText>
                    <DefaultText style={{ ...styles.detailsText, textAlign: 'left' }}>{mealDetails.complexity.toUpperCase()}</DefaultText>
                    <DefaultText style={{ ...styles.detailsText, textAlign: 'right' }}>{mealDetails.affordibilty.toUpperCase()}</DefaultText>
                </View>
                <Text style={styles.titleText}>Ingredients</Text>
                {mealDetails.ingredients.map((item) => createListItem(item))}
                <Text style={styles.titleText}>Steps</Text>
                {mealDetails.steps.map((item) => createListItem(item))}
            </ScrollView>
    )

}

MealDetailScreen.navigationOptions = navigationData => {
    const isFav = navigationData.navigation.getParam('isFav')

    return {
        headerTitle: navigationData.navigation.getParam('title'),
        headerRight: () => {
            const id = navigationData.navigation.getParam('id')
            const handler = mealId => {
                navigationData.navigation.getParam('favoritesHandler')(mealId)
            }

            return (
                <HeaderButtons HeaderButtonComponent={FavoriteButton}>
                    <Item color={isFav ? 'orange' : (Platform.OS === 'android' ? 'white' : Colors.primary)} iconName='ios-star' onPress={() => handler(id)} title='Favorite' />
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    list: {
        alignItems: 'center'
    },

    image: {
        width: '100%',
        height: 200
    },

    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: Dimensions.get('window').width,
        justifyContent: 'space-between'
    },

    listItemView: {
        padding: 10,
        width: '90%',
        borderRadius: 10,
        borderWidth: 3,
        margin: 7,
    },

    titleText: {
        fontFamily: 'fontBold',
        fontSize: 23
    }
})

export default MealDetailScreen;