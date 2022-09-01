import React, { ReactNode } from 'react'
import { Navigate, Route } from 'react-router-dom'
import type { RouteProps } from 'react-router-dom'
import { userLoggedIn } from '../auth'

/**
 * Only renders (or allows navigation to) a route if a condition is met.
 * Otherwise, it redirects to a different specified route.
 *
 * Supports and passes through all properties of `react-router-dom`'s {@link Route},
 * including `Route.element`}`, `Route.component`, and `Route.children`.
 *
 * This is an abstract foundation for specific types of routing protection, including:
 * - {@link LoggedInRoute}
 * - {@link AdminRoute}
 */
export default function ConditionalRoute({
  condition,
  redirectTo,
  children,
}: ConditionalRouteProps): JSX.Element {
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
