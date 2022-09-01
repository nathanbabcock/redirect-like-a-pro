import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import LoggedIn from './pages/LoggedIn'
import WrongWay from './pages/WrongWay'
import WrongWayV2 from './pages/WrongWayV2'
import AdminRoute, { withAdmin } from './routes/AdminRoute'
import LoggedInRoute, { withLoggedIn } from './routes/LoggedInRoute'

const LoggedInPage = withLoggedIn(LoggedIn)
const AdminPage = withAdmin(Admin)

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wrong-way" element={<WrongWay />} />
        <Route path="/wrong-way-v2" element={<WrongWayV2 />} />
        <Route path="/wrong-way-v2" element={<WrongWayV2 />} />

        <Route path="/logged-in" element={<LoggedInPage />} />
        <Route path="/admin" element={<AdminPage />} />

        {/* Alternative, using wrapped components instead of higher-order */}
        <Route
          path="/logged-in-v2"
          element={
            <LoggedInRoute>
              <LoggedIn />
            </LoggedInRoute>
          }
        />

        {/* Old react-router v5 style, no longer works: */}
        {/* <LoggedInRoute path="/logged-in" element={<LoggedInRoute />} /> */}
        {/* <AdminRoute path="/admin" element={<Admin />} /> */}
      </Routes>
    </Router>
  )
}
