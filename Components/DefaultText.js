import React from 'react'
import {Text, StyleSheet, Dimensions} from 'react-native'

const DefaultText = props => {
    return <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'fontRegular',
        fontSize: Dimensions.get('window').height > 700 ? 17 : 13
    }
})

export default DefaultText;