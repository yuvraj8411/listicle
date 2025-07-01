import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { styles } from "./style";

const CheckBox = ({ checked, onCheck }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onCheck(!checked)} style={styles.container} >
            {checked ?
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require("../../assets/check.png")} />
                </View> : null}
        </TouchableOpacity>

    );
}
export default React.memo(CheckBox);