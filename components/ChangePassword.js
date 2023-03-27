import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import App from "./firebase";

import { getAuth } from "firebase/auth";




export default function ChangePassword() {
    const auth = getAuth();
    const nav = useNavigation();
    const user = auth.currentUser
    const [ newPassword, setNewPassword ] = useState("");
    const [ password, setPassword ] = useState("");
    
    async function validar (password){
        updatePassword(user, newPassword).then(() => {
        }).catch((error) => {
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
            <TextInput style={styles.Input} placeholder={"Senha"} value={password} onChangeText={(text) => setPassword(text)}/>
            <TextInput style={styles.Input} placeholder={"Nova senha"} value={newPassword} onChangeText={(text) => setNewPassword(text)}/>
        </View>
        <View style={{padding:25}}></View>
        <TouchableOpacity style={styles.button} onPress={ () => validar( password) }><Text style={styles.Text}>Sign In</Text></TouchableOpacity>
        
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