import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Signin from './components/authenticate/Signin'
import Signup from './components/authenticate/Signup'
import LoginContextProvider from './context/LoginContextProvider'
import Navbar from './components/Navbar'

const App = () => {

  const [login, setLogin] = useState(true)
  return (
    <>
      <LoginContextProvider.Provider value={{ setLogin }}>
        {login ?
          <>
            <Navbar />
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='*' element={<Home />} />
            </Routes>
          </>
          :
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<Signin />} />
          </Routes>
        }
      </LoginContextProvider.Provider>
    </>
  )
}

export default App