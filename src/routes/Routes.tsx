import { Route, Routes } from 'react-router-dom'
import _404 from '../pages/404'
import AccessDenied from '../pages/AccessDenied'
import CustomComponentPage from '../pages/CustomComponent'
import HigherOrderComponentPage from '../pages/HigherOrderComponent'
import Home from '../pages/Home'
import NaiveApproach from '../pages/NaiveApproach'
import LoggedInRoute from './LoggedInRoute'
import { withLoggedIn, withLoggedOut } from './withLoggedIn'

export const AuthRoute = (...args: Parameters<typeof Route>) => Route(...args)

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/access-denied" element={withLoggedOut(AccessDenied)()} />

      {/* Method 1: Using `useEffect()` as a redirect */}
      <Route path="/naive-approach" element={<NaiveApproach />} />

      {/* Method 2: Using a custom component (abstract and centralized, but verbose) */}
      <Route
        path="/custom-component"
        element={
          <LoggedInRoute>
            <CustomComponentPage />
          </LoggedInRoute>
        }
      />

      {/* Method 3: Using a higher-order component (best of both worlds!) */}
      <Route path="/higher-order-component" element={withLoggedIn(HigherOrderComponentPage)()} />

      {/* Addendum: Old react-router v5 style, which no longer works: */}
      {/* <LoggedInRoute path="/router-v5" element={<LoggedIn />} /> */}

      {/* 👇️ only match this when no other routes match */}
      <Route path="*" element={<_404 />} />
    </Routes>
  )
}
