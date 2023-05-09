import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import {db, storage, app} from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigation } from "@react-navigation/native"
import { getFirestore, doc, collection, addDoc, serverTimestamp, setDoc } from 'firebase/firestore';


export default function Save(props) {
    
    console.log(props.route.params.image)
    const [ caption, setCaption ] = useState("");
    const auth = getAuth();
    const storage = getStorage();
    const nav = useNavigation();
    const db = getFirestore();


    const savePostData = async (downloadURL) => {
        const postRef = collection(db, 'posts');
        await addDoc(collection(postRef, auth.currentUser.uid, "userPosts"), {
            caption: caption,
            creation: serverTimestamp(),
            mediaUrl: downloadURL
          });
          
    }

    const uploadImage = async () => {
        
        const uri = props.route.params.image;
        console.log(storage)
        const response = await fetch(uri);
        const storageRef = ref(storage, `post/${auth.currentUser.uid}/${Math.random().toString(36)}`);
        const blob = await response.blob();


        const uploadTask = uploadBytesResumable(storageRef, blob)
        uploadTask.on('state_changed',
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                savePostData(downloadURL)
                });
            }
            );
    }
        
    

 return (
   <View>
    <Image source={{uri: props.route.params.image}} style={{width:300, height: 300}}/>
    <TextInput placeholder='Digite uma legenda...' onChange={(caption) => setCaption(caption)}/>
    <TouchableOpacity onPress={() => uploadImage()}><Text>Save</Text></TouchableOpacity>
   </View>
  );
}