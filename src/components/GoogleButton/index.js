import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "../../components/GoogleButton/style";



const GoogleLoginButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
                source={require("../../assets/google.png")}
                style={styles.image}
            />
        </TouchableOpacity>
    );
}

export default React.memo(GoogleLoginButton);