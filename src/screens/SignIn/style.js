import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";



export const styles = StyleSheet.create({

    container: {
        padding: 20,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        color: colors.blue,
    },
    footerTextBold: {
        fontWeight: 'bold',
        color: colors.blue,
    }

});