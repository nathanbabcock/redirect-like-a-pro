import React from 'react'
import type { RouteProps } from 'react-router-dom'
import { userLoggedIn } from '../auth'
import ConditionalRoute, { withCondition } from './ConditionalRoute'

export default function LoggedInRoute({ children }: RouteProps) {
  return (
    <ConditionalRoute condition={userLoggedIn()} redirectTo="/home">
      {children}
    </ConditionalRoute>
  )
}

export const withLoggedIn = (Component: React.FunctionComponent) =>
  withCondition(Component, userLoggedIn(), '/home')
