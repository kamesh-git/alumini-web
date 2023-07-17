import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Signin from './components/authenticate/Signin'
import Signup from './components/authenticate/Signup'
import LoginContextProvider from './context/LoginContextProvider'
import Navbar from './components/Navbar'
import { onAuthStateChanged } from 'firebase/auth'
import useFirebase from './context/useFirebase'
import Checkout from './components/Checkouttest/Checkout'
import { doc, getDoc } from 'firebase/firestore'

const App = () => {

  const [login, setLogin] = useState(2)
  const [userdetails, setUserdetails] = useState({})
  const { auth, db } = useFirebase()

  useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     getDoc(doc(db, 'users', user.uid)).then(docSnap => {
    //       if (docSnap.data()) {
    //         setUserdetails({ ...docSnap.data(), user_id: user.uid })
    //         setLogin(2)
    //       }
    //       setLogin(1)
    //     })
    //   }
    //   else {
    //     setLogin(0)
    //   }
    // })
  }, [])

  useEffect(() => {
    console.log(userdetails)
  }, [userdetails])
  return (
    <>
      <LoginContextProvider.Provider value={{ setLogin }}>
        {login == 0 ?
          <Signin />
          :
          login == 1 ?
            <Signup />
            :
            <>
              <Navbar />
              <Routes>
                <Route path='/profile' element={<Profile userdetails={userdetails} />} />
                <Route path='/checkouttest' element={<Checkout />} />
                <Route path='*' element={<Home />} />
              </Routes>
            </>
        }
      </LoginContextProvider.Provider>
    </>
  )
}
export default App