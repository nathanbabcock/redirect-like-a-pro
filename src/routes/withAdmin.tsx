import { useContext } from 'react'
import { UserContext } from '../UserContext'
import { withCondition } from './withCondition'

/** A higher-order component implementation for Admin-only restricted pages */
export const withAdmin = (Component: React.FunctionComponent) => {
  const { loggedIn, isAdmin } = useContext(UserContext)
  return withCondition(Component, loggedIn && isAdmin, '/access-denied')
}
