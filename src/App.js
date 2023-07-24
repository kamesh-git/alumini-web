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
import { Container } from '@mui/material'
import Contact from './components/Contact'
import Test from './components/Others/Test'

const App = () => {

  const [login, setLogin] = useState(0)
  const [userdetails, setUserdetails] = useState({})
  const [user, setUser] = useState(null)
  const { auth, db } = useFirebase()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(db, 'users', user.uid)).then(docSnap => {
          setUser(user)
          if (docSnap.data()) {
            setUserdetails({ ...docSnap.data(), user_id: user.uid })
            setLogin(2)
          }
          else {
            console.log('test')
            setLogin(1)
          }
        })
      }
      else {
        setLogin(0)
      }
    })
  }, [])

  const MainPage = () => (
    <>
      <Navbar />
      <Container children>
        <Routes>
          <Route path='/profile' element={<Profile userdetails={userdetails} />} />
          <Route path='/checkouttest' element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Container>
    </>
  )
  return (
    <>
      <LoginContextProvider.Provider value={{ setLogin,user }}>
        {login == 0 ?
          <Signin />
          :
          login == 1 ?
            <Signup />
            :
            <MainPage />
        }
      </LoginContextProvider.Provider>
    </>
  )
}
export default App