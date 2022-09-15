import { useContext } from 'react'
import type { RouteProps } from 'react-router-dom'
import { UserContext } from '../UserContext'
import ConditionalRoute from './ConditionalRoute'

/**
 * A second example of a custom route component,
 * built on top of the abstract `ConditionalRoute` component
 */
export default function AdminRoute({ children }: RouteProps) {
  const { loggedIn, isAdmin } = useContext(UserContext)

  return (
    <ConditionalRoute
      condition={loggedIn && isAdmin}
      redirectTo="/access-denied"
    >
      {children}
    </ConditionalRoute>
  )
}
