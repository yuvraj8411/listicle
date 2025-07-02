import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    line: {
        height: 2,
        backgroundColor: colors.lightGrey,
        flex: 1,
    },
    text: {
        color: colors.blue,
        fontWeight: "500",
        marginHorizontal: 10,
    }

});