import { useContext } from 'react'
import type { RouteProps } from 'react-router-dom'
import { UserContext } from '../UserContext'
import ConditionalRoute from './ConditionalRoute'

/**
 * A custom component which binds a specific condition (user is logged in),
 * and a specific redirect (access-denied), to the abstract `ConditionalRoute`
 */
export default function LoggedInRoute({ children }: RouteProps) {
  return (
    <ConditionalRoute condition={useContext(UserContext).loggedIn} redirectTo="/access-denied">
      {children}
    </ConditionalRoute>
  )
}
