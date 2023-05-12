import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'; //AntDesign
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function BottomBar(props) {
    const nav = useNavigation();
    return (
   <View style={[styles.Container, {marginTop: props.marginTop}]}>
    <View style={styles.Icon}>
        <TouchableOpacity onPress={() => nav.navigate("Feed")}><Entypo size={25} style={{color: "#f1f1f1"}} name='home'/></TouchableOpacity>
        <Text style={{color:"#f1f1f1"}}>Home</Text>
    </View>
    <View style={styles.Icon}>
        <TouchableOpacity><FontAwesome size={25} style={{color: "#f1f1f1"}} name='search'/></TouchableOpacity>
        <Text style={{color:"#f1f1f1"}}>Search</Text>
    </View>
    <View style={styles.Icon}>
        <TouchableOpacity onPress={() => nav.navigate("Create")}><AntDesign size={25} style={{color:"#f1f1f1"}} name='plus'/></TouchableOpacity>
        <Text style={{color:"#f1f1f1"}}>Create</Text>
    </View>
    <View style={styles.Icon}>
        <TouchableOpacity><AntDesign size={25} style={{color: "#f1f1f1"}} name='message1'/></TouchableOpacity>
        <Text style={{color:"#f1f1f1"}}>Notifications</Text>
    </View>
    <View style={styles.Icon}>
        <TouchableOpacity><AntDesign size={25} style={{color: "#f1f1f1"}} name='user'/></TouchableOpacity>
        <Text style={{color:"#f1f1f1"}}>Saved</Text>
    </View>
   </View>
  ); 
}

const styles = StyleSheet.create({
    Container:{
        padding: 15,
        width: "100%",
        height: "8%",
        backgroundColor: "#111111",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center'
    },
    Icon:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})