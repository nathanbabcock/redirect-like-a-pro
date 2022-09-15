import { Link } from 'react-router-dom'

export default function AccessDenied() {
  return (
    <div>
      <h1>Access Denied</h1>
      <p>
        You tried to access a protected page while not logged in. In a real app,
        this could redirect you to a login page, or back to the homepage.
      </p>
      <p>
        <Link to="/">Go back home</Link>.
      </p>
    </div>
  )
}
