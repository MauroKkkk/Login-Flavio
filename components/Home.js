import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';





export default function Home() {
    const nav = useNavigation();
 return (
   <View style={styles.Container}>
        <View style={styles.Card}>
            <TouchableOpacity onPress={() => nav.navigate("Login")} style={styles.button}>Login</TouchableOpacity>
            <TouchableOpacity style={styles.button}>SignUp</TouchableOpacity>
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
        height: 160,
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