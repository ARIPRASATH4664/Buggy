import { StyleSheet,Dimensions } from "react-native";
import {moderateScale} from 'react-native-size-matters';
import Colors from '../assets/Colors'

const {width, height} = Dimensions.get('window');


export const HeaderStyle = StyleSheet.create({
    container: {
        height: moderateScale(width/10),
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        alignItems: 'center',
        color: Colors.primaryColor
    },
});