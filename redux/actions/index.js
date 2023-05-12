import { collection, getDoc, getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { USER_STATE_CHANGE  } from "../constants";

export function fetchUser(){
    const db = getFirestore();
    const auth = getAuth();
    return(async(dispatch) => {
        collectionRef = collection(db, "users", auth.currentUser.uid)
        const docSnap = await getDoc(collectionRef)

        if(docSnap.exists()){
            dispatch({type: USER_STATE_CHANGE, currentUser: docSnap.data()})
        } else {
            console.log("No such document")
        }
    })
}