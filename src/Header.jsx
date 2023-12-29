import React from 'react';
import {View, Text, TouchableOpacity, Press} from 'react-native';
import {HeaderStyle} from './Header.style';
import _ from 'lodash';


export const Header = (props) => {
    return (
        <View style={HeaderStyle.container}> 
            <Text style={HeaderStyle.heading}>
                Header
            </Text>
        </View>
    );
}