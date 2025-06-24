import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../components/Button/style';


const Button = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default React.memo(Button);
