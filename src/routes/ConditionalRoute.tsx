import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

/**
 * Only renders (or allows navigation to) a route if a condition is met.
 * Otherwise, it redirects to a different specified route.
 *
 * This is an abstract foundation for specific types of routing protection, including:
 * - [./LoggedInRoute.tsx](./LoggedInRoute.tsx)
 * - [./AdminRoute.tsx](./AdminRoute.tsx)
 */
export default function ConditionalRoute({
  condition,
  redirectTo,
  children
}: ConditionalRouteProps) {
  return condition ? <>{children}</> : <Navigate to={redirectTo} replace />
}

export type ConditionalRouteProps = {
  /**
   * Must be true for the route to be created.
   * For example, `condition={isLoggedIn}` or `condition={isAdmin}`
   */
  condition: boolean

  /** The route to redirect to if `condition` is false */
  redirectTo: string

  children?: ReactNode

  /** Captures any other props which might be passed in and applied to the internal <Route> */
  [key: string]: any
}
