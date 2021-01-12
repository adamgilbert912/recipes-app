import React, { useCallback, useEffect, useState } from 'react'
import { Text, StyleSheet, Switch, View, Platform } from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'
import DefaultText from '../Components/DefaultText'
import MenuButton from '../Components/MenuButton'
import Colors from '../Constants/Colors'
import { setFilters } from '../Store/Actions/meals'

const TextSwitch = props => {
    return (
        <View style={styles.textSwitchContainer}>
            <DefaultText style={{fontSize: 16}}>{props.label}</DefaultText>
            <Switch
                value={props.value}
                onValueChange={props.onValueChange}
                trackColor={{true: Colors.primary}}
                thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
            />
        </View>
    )
}

const FiltersScreen = props => {
    const [isGlutenFree, setisGlutenFree] = useState(false)
    const [isLactoseFree, setisLactoseFree] = useState(false)
    const [isVegetarian, setisVegetarian] = useState(false)
    const [isVegan, setisVegan] = useState(false)

    const dispatch = useDispatch()

    const saveFilters = useCallback(() => {
        const filters = {
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegetarian: isVegetarian,
            isVegan: isVegan
        }

        dispatch(setFilters(filters))
    }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan, dispatch])

    useEffect(() => {
        props.navigation.setParams({save: saveFilters})
    }, [saveFilters])

    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'fontBold', fontSize: 25 }}>Filters / Restrictions</Text>
            <TextSwitch label='Gluten-Free:' value={isGlutenFree} onValueChange={(value) => setisGlutenFree(value)} />
            <TextSwitch label='Lactose-Free:' value={isLactoseFree} onValueChange={(value) => setisLactoseFree(value)} />
            <TextSwitch label='Vegetarian:' value={isVegetarian} onValueChange={(value) => setisVegetarian(value)} />
            <TextSwitch label='Vegan:' value={isVegan} onValueChange={(value) => setisVegan(value)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    textSwitchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: 10
    }
})

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={MenuButton}>
                    <Item title='Menu'
                        iconName='ios-menu'
                        onPress={() => { navData.navigation.toggleDrawer() }}
                    />
                </HeaderButtons>
            )
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={MenuButton}>
                    <Item title='Save' onPress={navData.navigation.getParam('save')}/>
                </HeaderButtons>
            )
        }
    }
}

export default FiltersScreen;