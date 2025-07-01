import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({

    container: {
        paddingLeft: 20,
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 4,
        height: 24,
        width: 24,
    },
    innerContainer: {
        borderColor: colors.grey,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        width: 16,
        height: 10,
    },
});