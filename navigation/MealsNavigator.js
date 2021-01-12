import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../Constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Platform, Text } from 'react-native'
import FiltersScreen from '../screens/FiltersScreen'


const defaultStackNavOptions =  {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : undefined,
    },
    headerTitleStyle: {
        fontFamily: 'fontBold'
    },
    headerBackTitleStyle: {
        fontFamily: 'fontRegular'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const categoriesNavigator = createStackNavigator({
    CategoriesScreen: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Categories'
        }
    },

    CategoryMealsScreen: {
        screen: CategoryMealsScreen
    },
    MealDetailScreen: {
        screen: MealDetailScreen
    }
},

    {
        defaultNavigationOptions: defaultStackNavOptions

    })

const favoritesNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen

    },
    MealDetailScreen: {
        screen: MealDetailScreen
    }
},
{
    defaultNavigationOptions: defaultStackNavOptions
    
})

const filtersNavigator = createStackNavigator({
    Filters: {
        screen: FiltersScreen
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const tabConfig = {
    Meals: {
        screen: categoriesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={20} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primary,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'fontBold'}}>Meals</Text> : 'Meals'
        }
    },
    Favorites: {
        screen: favoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star-outline' size={20} color={tabInfo.tintColor} />
            },
            tabBarColor: 'orange',
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'fontBold'}}>Favorites</Text> : 'Favorites'
        },
        activeTintColor: 'orange'
    }
}

let tabNavigator = createBottomTabNavigator(tabConfig,
    {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'fontBold'
            },
            activeTintColor: Colors.primary
        },
        
    })


if (Platform.OS === 'android') {
    tabNavigator = createMaterialBottomTabNavigator(tabConfig,
        {
            activeColor: 'white',
            shifting: true
        }
    )
}

const mainNavigator = createDrawerNavigator({
    Categories: tabNavigator,
    Filters: {
        screen: filtersNavigator
    }
}, {
    contentOptions: {
        activeTintColor: Colors.primary,
        labelStyle: {
            fontFamily: 'fontBold',
            fontSize: 25
        }
    }
})

export default createAppContainer(mainNavigator);