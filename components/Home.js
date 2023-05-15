import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default function Home() {
    const nav = useNavigation();

    
    
 return (
   <View style={styles.Container}>
        <View style={styles.Card}>
            <TouchableOpacity onPress={() => nav.navigate("SignInPage")} style={styles.button}><Text style={styles.Text}>Login</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => nav.navigate("SignUpPage")}><Text style={styles.Text}>Sign Up</Text></TouchableOpacity>
        </View>
   </View>
  );
}


const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    Card:{
        justifyContent:"center",
        justifyContent: "space-around",
        alignItems:'center',
        width:200,
        height: 180,
    },
    button:{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        width: 200,
        height:60,
        backgroundColor: "#02D5FF",
    },
    Text:{
        color: "white",
        fontSize: 21,
        fontWeight: 700,
    }

})