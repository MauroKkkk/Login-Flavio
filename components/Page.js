import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import BottomBar from './BottomBar';
import { useNavigation } from '@react-navigation/native';
import { getAuth, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";


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
      <BottomBar/>
    </View>
  );
}


const styles = StyleSheet.create({
  Container:{
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex:1
  },
  Bottom:{
    marginBottom: 60
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