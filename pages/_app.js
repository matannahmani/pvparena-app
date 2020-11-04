import React, {useEffect,useState} from 'react';
import { GeistProvider, CssBaseline, User } from '@geist-ui/react'
import '../styles/globals.scss'
import Navbar from '../components/navbar'
import {UserContext} from '../components/contextprovider'
import { isLogged } from '../auth/authprovider';
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const loadUser = async () => {
      const result = await isLogged();
      setUser(result);
    }
    loadUser();
  }, [user])
  return (
    <UserContext.Provider value={[user,setUser]}>
      <GeistProvider>
        <Navbar/>
          <main id="page-wrap">
            <CssBaseline />
            <Component {...pageProps} />
          </main>
      </GeistProvider>
    </UserContext.Provider>
  )
}

export default MyApp
