import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'

const CategoryListItem = props => {

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={{ ...styles.listItem, backgroundColor: props.backgroundColor }}
            onPress={props.onPress}
        >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    listItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width > 375 ? '42%' : '40%',
        margin: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 8,
        height: Dimensions.get('window').height > 700 ? 175 : (Dimensions.get('window').height > 600 ? 150 : 125),
        borderRadius: 30
    },
    title: {
        fontFamily: 'fontBold',
        fontSize: Dimensions.get('window').height > 700 ? 21 : 18
    }
})

export default CategoryListItem;