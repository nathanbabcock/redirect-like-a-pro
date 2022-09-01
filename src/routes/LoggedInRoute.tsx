import type { RouteProps } from 'react-router-dom'
import { userLoggedIn } from '../auth'
import ConditionalRoute from './ConditionalRoute'

export default function LoggedInRoute({ children }: RouteProps) {
  return (
    <ConditionalRoute condition={userLoggedIn()} redirectTo="/home">
      {children}
    </ConditionalRoute>
  )
}
