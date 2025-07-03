import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";


export const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    agreeComponentRow: {
        paddingLeft: 20,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 10,

    },
    agreeTextBold: {
        fontWeight: 'bold',
        color: colors.blue,
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