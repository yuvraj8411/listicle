import React from "react";
import { View, TextInput, Text, Pressable, Image } from "react-native";
import { styles } from "./style";

const Input = ({ label, placeholder, isPassword }) => {

    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const onEyeButtonPress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    // onChangeText={() => { }}
                    placeholder={placeholder}
                    secureTextEntry={isPassword && !isPasswordVisible}
                />
                {isPassword ? (
                    <Pressable onPress={onEyeButtonPress}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/eye.png')}
                        />
                    </Pressable>
                ) : null}
            </View>
        </View>
    );
}
export default React.memo(Input);