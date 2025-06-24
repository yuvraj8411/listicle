import { Pressable, View } from "react-native";
import React from "react";
import { Text, Image } from "react-native";
import Button from "../../components/Button";
import { styles } from "./styles";
import { colors } from "../../utils/color";

const Splash = () => {
    return (

        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image}
                source={require('../../assets/splash_image.png')}
            />
            <View>
                <Text style={styles.title}>
                    You'll Find
                </Text>
                <Text style={styles.innerTile}>
                    All you need
                </Text>
                <Text style={styles.title}>
                    Here!
                </Text>
            </View>
            <Button title="Sign Up" style={{ marginTop: 24 }} />
            <Pressable style={{ marginTop: 24 }} hitSlop={20}>
                <Text style={{ color: colors.blue, textAlign: 'center', fontWeight: 'bold' }}>Sign In</Text>
            </Pressable>
        </View>
    );
}

export default React.memo(Splash);
