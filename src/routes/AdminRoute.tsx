import type { RouteProps } from 'react-router-dom'
import { userIsAdmin, userLoggedIn } from '../auth'
import ConditionalRoute, { withCondition } from './ConditionalRoute'

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

export const withAdmin = (Component: React.FunctionComponent) =>
  withCondition(Component, userLoggedIn() && userIsAdmin(), '/home')
