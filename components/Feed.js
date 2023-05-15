import React, { useEffect } from "react"
import { View, TouchableOpacity, Text, StyleSheet, Image, FlatList } from "react-native"
import BottomBar from "./BottomBar";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "./firebase"
import { useState } from "react";

export default function Feed(){
    const [ feed, setFeed ] = useState([])
    const [load, setLoad] = useState(false)
    getPhoto = async () => {    
        console.log("Upa")
        const collectionRef = collection(db, "posts", auth.currentUser.uid, "userPosts")
        const posts = await getDocs(collectionRef)
        posts.forEach(post => { 
            feed.push(post.data().mediaUrl)      
        });
        setLoad(true)
    }
    if(!load){
        getPhoto()
        console.log(feed[2])

    }
    return(
        load ?
        <View style={styles.container}>
            <FlatList
                vertical
                style={{height:300, marginTop:'10%'}}
                showsHorizontalScrollIndicator={true}
                data={feed}
                renderItem={({ item }) => (
                        <Image
                        source={{uri: item}}
                        style={{
                            width: 180,
                            height: 200,
                            borderRadius: 10,
                            borderColor: '#d35647',
                            resizeMode: 'contain',
                            margin: 15
                        }} 
                        />
                        
                )}
            />
            <BottomBar marginTop={10}/>
        </View>
        :
        <View style={styles.loadPage}>
            <Text style={styles.loadFont}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%",
      height: "100%",
      backgroundColor: "#111111"
    },
  });
