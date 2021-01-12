import React, {useState} from 'react'
import {Ionicons} from '@expo/vector-icons'
import {HeaderButton} from 'react-navigation-header-buttons'
import { Platform } from 'react-native'

import Colors from '../Constants/Colors'



const FavoriteButton = props => {
    
    return (
        <HeaderButton 
        {...props} 
        IconComponent={Ionicons} 
        iconSize={23}
        onPress={props.onPress}
        />
    )
}

export default FavoriteButton;