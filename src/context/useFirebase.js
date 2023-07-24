import React from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {  getStorage } from 'firebase/storage'

const useFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDZ3agIfO-qYzZaeN22Ef5Jo0hQDJnXVp0",
    authDomain: "alumini-website-bcdc9.firebaseapp.com",
    projectId: "alumini-website-bcdc9",
    storageBucket: "alumini-website-bcdc9.appspot.com",
    messagingSenderId: "550874617310",
    appId: "1:550874617310:web:968544739e14579d33f94f"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getFirestore(app)
  const storage = getStorage(app)

  return { auth,db,storage }
}

export default useFirebase