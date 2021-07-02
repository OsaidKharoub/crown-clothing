import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
        apiKey: "AIzaSyDqJmLuHbO9fDfyNr_27j4o4KY1jEUOPHg",
        authDomain: "crwn-db-63bf8.firebaseapp.com",
        projectId: "crwn-db-63bf8",
        storageBucket: "crwn-db-63bf8.appspot.com",
        messagingSenderId: "192068826620",
        appId: "1:192068826620:web:618256381352fe4f28ee79",
        measurementId: "G-ETKH33RY8M"
    };



export const createUserProfileDecument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot =  await userRef.get();

    console.log(snapShot)
    

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                createdAt,
                displayName,
                email,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user' , error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
    

export const singInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;