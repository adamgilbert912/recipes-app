import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Meal from '../models/Meal'

const MealItem = props => {

    return (

        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.imageContainer}>
                <ImageBackground style={styles.image} source={{ uri: props.imageSource }}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>{props.title}</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.detailsContainer}>
                <View style={{ ...styles.detailsTextContainer, alignItems: 'flex-start' }}><Text style={styles.detailsText}>{props.duration}m</Text></View>
                <View style={{...styles.detailsTextContainer, alignItems: 'flex-start'}}><Text style={styles.detailsText}>{props.complexity.toUpperCase()}</Text></View>
                <View style={{ ...styles.detailsTextContainer, alignItems: 'flex-end' }}><Text style={styles.detailsText}>{props.affordibility.toUpperCase()}</Text></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: Dimensions.get('window').height > 700 ? 250 : (Dimensions.get('window').height > 600 ? 200 : 150),
        overflow: 'hidden',
        borderRadius: 10,
        marginVertical: 10,
    },

    imageContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 9,
    },

    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },

    titleView: {
        backgroundColor: 'black',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },

    titleText: {
        color: 'white',
        fontFamily: 'fontBold',
        textAlign: 'center',
        fontSize: 18,
        opacity: 1
    },

    detailsContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    },

    detailsTextContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: Dimensions.get('window').width > 350 ? 10 : 5
    },

    detailsText: {
        fontFamily: 'fontRegular',
        textAlign: 'center'
    }
})

export default MealItem;