import type { RouteProps } from 'react-router-dom'
import { userIsAdmin, userLoggedIn } from '../auth'
import ConditionalRoute from './ConditionalRoute'

export default function AdminRoute({ children }: RouteProps) {
  return (
    <ConditionalRoute
      condition={userLoggedIn() && userIsAdmin()}
      redirectTo="/home"
    >
      {children}
    </ConditionalRoute>
  )
}
