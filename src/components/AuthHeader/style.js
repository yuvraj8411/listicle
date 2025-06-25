import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";


export const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 54,
        paddingLeft: 30,
        paddingTop: 40,
    },
    image: {
        width: 20,
        height: 20,
    },
    title: {
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: colors.blue
    },
});