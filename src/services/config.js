import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  //Your Firebase configs here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }