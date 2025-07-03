import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/TextField";
import CheckBox from "../../components/CheckBox";
import { styles } from "./style";
import Button from "../../components/Button";
import { ScrollView } from "react-native";
import Separator from "../../components/Seperator";
import GoogleButton from "../../components/GoogleButton";

const SignUp = () => {
    const [checked, setChecked] = useState(false);
    return (
        <ScrollView style={styles.container} >
            <AuthHeader title="Sign Up" onBackPress={() => { }} />
            <Input label="Name" placeholder="Yuvraj Baravkar" />
            <Input label="Email" placeholder="yuvrajbaravkar84@gmail.com" />
            <Input isPassword label="Password" placeholder="********" />
            <View style={styles.agreeComponentRow} >

                <CheckBox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}> I agree with
                    <Text style={styles.agreeTextBold}> Terms </Text>
                    <Text>&</Text>
                    <Text style={styles.agreeTextBold}> Privacy</Text>
                </Text>
            </View>
            <Button title="Sign Up" style={{ marginTop: 24, paddingLeft: 20, paddingRight: 20 }} />
            <Separator text="Or Sign Up with" />
            <View style={{ alignItems: 'center' }}>
                <GoogleButton />
            </View>
            <Text style={styles.footerText}>Already have an account? <Text style={styles.agreeTextBold}> Sign In</Text></Text>

        </ScrollView>
    );
}
export default SignUp;