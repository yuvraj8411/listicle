import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    label: {
        fontSize: 14,
        color: colors.blue,
        fontWeight: "500",
        marginBottom: 8,
    },

    inputContainer: {
        borderWidth: 0.8,
        borderRadius: 10,
        alignItems: "center",
        color: colors.grey,
        flexDirection: "row",
    },
    input: {

        paddingVertical: 20,
        paddingHorizontal: 16,
        flex: 1,
        //  color: colors.lightGrey,
    },
    image: {
        height: 24,
        width: 24,
        marginHorizontal: 16,
    }

});