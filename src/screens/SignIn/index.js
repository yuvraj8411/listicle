import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/TextField";
import Button from "../../components/Button";
import Separator from "../../components/Seperator";
import GoogleButton from "../../components/GoogleButton";
import { styles } from "./style";


const SignIn = () => {
    return (
        <ScrollView style={styles.container} >
            <AuthHeader title="Sign In" onBackPress={() => { }} />
            <Input label="E-mail" placeholder="yuvrjbaravkar84@gmail.com" />
            <Input isPassword label="Password" placeholder="********" />
            <Button title="Sign In" style={{ marginTop: 30, paddingLeft: 20, paddingRight: 20 }} />
            <Separator text="Or Sign In with" />
            <View style={{ alignItems: 'center' }}>
                <GoogleButton />
            </View>
            <Text style={styles.footerText}>Already have an account? <Text style={styles.footerTextBold}> Sign In</Text></Text>

        </ScrollView>
    );
}

export default React.memo(SignIn);