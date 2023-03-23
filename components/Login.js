import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { TextInput, StyleSheet } from 'react-native-web';
import { getAuth } from "firebase/auth";
import App from './firebase';
import EmailLogin from './email/emailLogin';






export default function Login() {
    const auth = getAuth();
    const { email, setEmail } = useState("");
    const { senha, setSenha } = useState("");
 return (
    <View style={styles.Container}>
        <View style={styles.Card}>
            <TextInput style={styles.Input} placeholder={"Email"} keyboardType={"Email"} value={email} onChange={(text) => setEmail(text)}/>
            <TextInput style={styles.Input} placeholder={"Senha"} value={senha} onChange={(text) => setSenha(text)}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={print("a")}>Login</TouchableOpacity>
        
    </View>
   
  );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Card: {
        width:200,
        height: 160,
        justifyContent:"space-around",
    },
    Input:{
        elevation:0,
        padding: 10,
        alignItems: "center",
        width: 190,
        height: 50,
    },
    button:{
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: 12,
        width: 190,
        height:50,
        backgroundColor: "#02D5FF",
    }
})