import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        marginBottom: 50,
        borderRadius: 12,
    },
    image: {
        width: 30,
        height: 30,
    }

});