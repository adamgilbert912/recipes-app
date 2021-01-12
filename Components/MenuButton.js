import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {HeaderButton} from 'react-navigation-header-buttons'
import { Platform } from 'react-native'

import Colors from '../Constants/Colors'

const MenuButton = props => {
    return (
        <HeaderButton 
        {...props} 
        IconComponent={Ionicons} 
        iconSize={28}
        color={Platform.OS === 'android' ? 'white' : Colors.primary}
        onPress={props.onPress}
        />
    )
}

export default MenuButton;