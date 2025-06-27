import React from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/TextField";

const SignUp = () => {
    return (
        <View >
            <AuthHeader title="Sign Up" onBackPress={() => { }} />
            <Input label="Name" placeholder="Yuvraj Baravkar" />
            <Input label="Email" placeholder="yuvrajbaravkar84@gmail.com" />
            <Input isPassword label="Password" placeholder="********" />


        </View>
    );
}
export default SignUp;