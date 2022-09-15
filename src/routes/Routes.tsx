import { Route, Routes } from 'react-router-dom'
import AccessDenied from '../pages/AccessDenied'
import CustomComponentPage from '../pages/CustomComponent'
import HigherOrderComponentPage from '../pages/HigherOrderComponent'
import Home from '../pages/Home'
import NaiveApproach from '../pages/NaiveApproach'
import LoggedInRoute from './LoggedInRoute'
import { withLoggedIn } from './withLoggedIn'

export function AppRoutes() {
  const HigherOrderRoute = withLoggedIn(HigherOrderComponentPage)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/access-denied" element={<AccessDenied />} />

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
      <Route path="/higher-order-component" element={<HigherOrderRoute />} />

      {/* Addendum: Old react-router v5 style, which no longer works: */}
      {/* <LoggedInRoute path="/router-v5" element={<LoggedIn />} /> */}
    </Routes>
  )
}
