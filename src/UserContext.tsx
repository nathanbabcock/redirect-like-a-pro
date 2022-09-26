import { createContext, ReactNode, useState } from 'react'

export const DefaultUserContext = {
  loggedIn: false,
  isAdmin: false,
  login: () => {},
  logout: () => {},
}

export const UserContext = createContext(DefaultUserContext)

export function UserProvider({ children }: { children?: ReactNode }) {
  const [loggedIn, _setLoggedIn] = useState(
    localStorage.getItem('loggedIn') === 'true'
  )
  const [isAdmin] = useState(false)
  const setLoggedIn = (val: boolean) => {
    localStorage.setItem('loggedIn', val.toString())
    return _setLoggedIn(val)
  }

  // In a real app, these methods would communicate with a backend,
  // obtain/verify a token, etc.
  const login = () => setLoggedIn(true)
  const logout = () => setLoggedIn(false)

  return (
    <UserContext.Provider value={{ loggedIn, isAdmin, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
