import React from 'react'
import {  View, StyleSheet, FlatList} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridItem from '../Components/CategoryGridItem'
import MenuButton from '../Components/MenuButton'


const CategoriesScreen = props => {

    const renderListItem = (itemData) => {
        return (<CategoryGridItem
            backgroundColor={itemData.item.color}
            title={itemData.item.title}
            onPress={() => props.navigation.navigate({ routeName: 'CategoryMealsScreen', params: { title: itemData.item.title, id: itemData.item.id} })} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList numColumns={2} data={CATEGORIES} renderItem={renderListItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

})

CategoriesScreen.navigationOptions = navData => {
    return {
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={MenuButton}>
                    <Item title='Menu'
                        iconName='ios-menu'
                        onPress={() => { navData.navigation.toggleDrawer() }}
                    />
                </HeaderButtons>
            )
        }
    }
}

export default CategoriesScreen;