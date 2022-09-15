import { createContext, ReactNode, useState } from 'react'

export const DefaultUserContext = {
  loggedIn: false,
  isAdmin: false,
  login: () => {},
  logout: () => {},
}

export const UserContext = createContext(DefaultUserContext)

export function UserProvider({ children }: { children?: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isAdmin] = useState(false)

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
