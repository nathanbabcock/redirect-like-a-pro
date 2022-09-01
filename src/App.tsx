import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </Router>
  )
}
