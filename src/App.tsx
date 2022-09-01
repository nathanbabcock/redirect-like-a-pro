import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import WrongWay from './pages/WrongWay'
import WrongWayV2 from './pages/WrongWayV2'
import LoggedInRoute from './routes/LoggedInRoute'
import LoggedIn from './pages/LoggedIn'
import AdminRoute from './routes/AdminRoute'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wrong-way" element={<WrongWay />} />
        <Route path="/wrong-way-v2" element={<WrongWayV2 />} />
        <Route path="/wrong-way-v2" element={<WrongWayV2 />} />

        <Route
          path="/logged-in"
          element={
            <LoggedInRoute>
              <LoggedIn />
            </LoggedInRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <LoggedIn />
            </AdminRoute>
          }
        />

        {/* <LoggedInRoute path="/logged-in" element={<LoggedInRoute />} /> */}
        {/* <AdminRoute path="/admin" element={<Admin />} /> */}
      </Routes>
    </Router>
  )
}
