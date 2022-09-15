import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/Routes'
import { UserProvider } from './UserContext'

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  )
}
