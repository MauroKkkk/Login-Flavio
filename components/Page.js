import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import ChangePassword from './ChangePassword';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

// Create a root reference

export default function Page() {
  const nav = useNavigation();
  const [ email, setEmail ] = useState("");
  const [ photoURL, setPhotoURL ] = useState("");
  const [ emailVer, setEmailVer ] = ("");
const auth = getAuth();
const user = auth.currentUser;

if(user!== null){
  console.log(user.emailVerified)
}

useEffect(() => {
 
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      
      setEmail(profile.email)
      setPhotoURL(profile.photoURL);
    });
  }
},[])
function AtualizarPerfil (photoURL){
  updateProfile(auth.currentUser, {
     photoURL: photoURL
  }).then(() => {
  }).catch((error) => {
  });
}
function VerificarEmail(){
  sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log("Email enviado")

  });
}

function ChangePassword(auth, email) {
  sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log("Email enviado")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
  });
}

 return (
   <View style={styles.Container}>
        <Text>{email}</Text>
        <Text>Email verificado: {user.emailVerified ? <Text>Sim</Text> : <Text>Não</Text>}</Text>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: photoURL,
        }}
        />

        <TouchableOpacity style={styles.button} onPress={() => ChangePassword(auth, email)}><Text style={styles.Text}>Alterar Senha</Text></TouchableOpacity>
        <TextInput style={styles.Input} placeholder={"Insira a URL da sua foto"} value={photoURL} onChangeText={(text) => setPhotoURL(text)}/>
        <TouchableOpacity style={styles.button} onPress={() => AtualizarPerfil(photoURL)}><Text style={styles.Text}>Alterar Foto</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => VerificarEmail()}><Text style={styles.Text}>Verificar email</Text></TouchableOpacity>
   </View>
  );
}


const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
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
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  Input:{
    elevation:0,
    padding: 10,
    alignItems: "center",
    width: 190,
    height: 50,
  }

})