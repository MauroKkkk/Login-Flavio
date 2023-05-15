import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import * as ImagePicker from "expo-image-picker";
import BottomBar from './BottomBar';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native"


export default function Create() {
    const [ image, setImage ] = useState("https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg");
    const [ width, setWidth ] = useState(150);
    const [ height, setHeight ] = useState(300);
    const [ load, setLoad ] = useState(false);

    const nav = useNavigation();
    async function hasAndroidPermission() {
        const permission = Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      
        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
          return true;
        }
      
        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
      }
      
      _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          })
          .then(r => {
            this.setState({ photos: r.edges });
            console.log(r)
            setLoad(true)
          })
          .catch((err) => {
             //Error Loading Images
          });
        };
    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            base64: true,
            quality: 1,
        })
        if(!result.canceled){
            setImage(result.assets[0].uri);
            console.log(result.assets[0].uri);
            {result.assets[0].width>150?setWidth(150):setWidth(result.assets[0].width)}
            {result.assets[0].height>300?setHeight(300):setHeight(result.assets[0].height)}
        }
    }

    if(!load){
        hasAndroidPermission()
        _handleButtonPress()

    }

 return (
   <View style={styles.Container}>
        <View/>
        <View style={{marginTop: 12}}/>
        <View style={{padding: 25, flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity onPress={() => nav.navigate("Feed")}><Entypo style={{color:"#e7e7e7"}} size={30} name="cross"/></TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate("Save", {image})} style={{backgroundColor:"#e60024", borderRadius: 20, width: 50, height: 40, justifyContent: "center", alignItems: "center"}}><Text style={{color: "#fff9f9"}}>Next</Text></TouchableOpacity>

        </View>

        <View style={{marginLeft: "30%"}}>
            <Image source={{uri: image}} style={{width: width, height: height, borderRadius: 10}}/>
        </View>
        
        <View style={{marginLeft: 10}}>
            <TouchableOpacity style={styles.Button} onPress={handleImagePicker}><MaterialIcons name="photo-camera" style={{color:"#f1f1f1"}} size={30} /></TouchableOpacity>
        </View>

        <BottomBar marginTop="70%"/>
   </View>
  );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#111111",
    },
    Button:{
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 70,
        backgroundColor: "#2b2b2b",
        borderRadius: 5,
    }
})