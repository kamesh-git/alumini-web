import React from 'react'
import useFirebase from '../../context/useFirebase'
import { useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useRef } from 'react'

const Test = () => {

  const { auth, db, storage } = useFirebase()
  const fileRef = useRef(null)
  const outRef = useRef(null)
  const [src, setSrc] = useState('')

  function handleSubmit() {
    // const storageRef = ref(storage, 'child');
    // const file = fileRef.current.files[0]
    // console.log(file)
    // // 'file' comes from the Blob or File API
    // uploadBytes(storageRef, file).then((snapshot) => {
    //   console.log('Uploaded a blob or file!');
    //   console.log(snapshot.ref)
    //   getDownloadURL(snapshot.ref).then(url => outRef.current.src=url)
    // });
  }


  useEffect(() => {
    // getDownloadURL(ref(storage,'WhatsApp Image 2021-10-20 at 6.08.05 PM.jpeg'))
    // .then((url) => {
    //   setSrc(url)
    // })
  }, [])

  return (
    <>
      <iframe src="" ref={outRef} frameBorder="0"></iframe>
      <input ref={fileRef} type="file" name="photo" id="" />
      <button onClick={handleSubmit}>submit</button>
    </>
  )
}

export default Test