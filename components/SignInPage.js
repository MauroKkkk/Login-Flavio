import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import App from "./firebase";

import { getAuth } from "firebase/auth";




export default function SignInPage() {
    const auth = getAuth();
    const nav = useNavigation();
    const [ user, setUser ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    
    async function validar (auth, email, password){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user)
          console.log(user)
          nav.navigate("Page")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(user)
        })
        
    }
    
    
 
 
      return (
    <View style={styles.Container}>
        <View style={styles.Card}>
            <TextInput style={styles.Input} placeholder={"Email"} keyboardType={"email-address"} value={email} onChangeText={(text) => setEmail(text)}/>
            <TextInput style={styles.Input} placeholder={"Senha"} value={password} onChangeText={(text) => setPassword(text)}/>
        </View>
        <View style={{padding:25}}></View>
        <TouchableOpacity style={styles.button} onPress={ () => validar(auth, email, password) }><Text style={styles.Text}>Sign In</Text></TouchableOpacity>
        
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
    },
    Text:{
        color: "white",
        fontSize: 21,
        fontWeight: 700,
    }
})