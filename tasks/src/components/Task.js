import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import CommonStyles from './CommonStyles'
import commonStyles from '../commonStyles';

export default props => {
    let check = null
    if (props.doneAt !== null) {
        check = (
            <View style={StyleSheet.done}>
                <Icon name='check' size={20}
                    color={commonStyles.colors.secondary}/>
            </View>
        )
    }else {
        check = <View style={StyleSheet.pending}/>
    }

    const descStyle = props.doneAt !== null ?
        {textDecorationLine: 'line-through'} : {}
}
