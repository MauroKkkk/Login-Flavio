import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';



const nav = useNavigation();
const EmailLogin = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    nav.navigate("Login")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};


export function EmailLogin();