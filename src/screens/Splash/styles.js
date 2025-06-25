import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';


export const styles = {
    container: {
        padding: 24,
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#333',
    },
    innerTile: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: colors.orange,
    },
    footerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.blue,
        marginTop: 16,
    }

};

