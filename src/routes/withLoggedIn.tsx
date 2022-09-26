import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { withCondition } from './withCondition'

/** A higher-order wrapper, binding the "user logged in" condition and redirect */
export const withLoggedIn = (Component: React.FunctionComponent) =>
  withCondition(Component, useContext(UserContext).loggedIn, '/access-denied')

/** The inverse, showing a page only if a user is logged OUT */
export const withLoggedOut = (Component: React.FunctionComponent) =>
  withCondition(Component, !useContext(UserContext).loggedIn, '/')
