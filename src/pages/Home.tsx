import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'
import './Home.css'

function Home() {
  const { loggedIn, login, logout } = useContext(UserContext)

  return (
    <div className="App App-header">
      <h1>React Router 6 Demo App</h1>
      <p>
        Welcome! This app contains three demo implementations of routes using{' '}
        <code>react-router@6.0.0</code>.
      </p>
      <p>
        In this demo, all routes require the user to be logged in. Three approaches to implementing
        this feature are shown, in increasing order of maintainability and robustness.
      </p>

      <p>
        You are currently <strong>logged {loggedIn ? 'in' : 'out'}</strong>.{' '}
        <button onClick={loggedIn ? logout : login}>Log {loggedIn ? 'out' : 'in'}</button>
      </p>

      <h2>The three methods:</h2>
      <ol>
        <li>
          <Link to="/naive-approach">
            <code>/naive-approach</code>
          </Link>
          , using <code>useEffect()</code> to redirect if the user is not logged in.
        </li>

        <li>
          <Link to="/custom-component">
            <code>/custom-component</code>
          </Link>
          , using a custom <code>&lt;LoggedInComponent&gt;</code> to centralize logic.
        </li>

        <li>
          <Link to="/higher-order-component">
            <code>/higher-order-component</code>
          </Link>
          , using a higher-order <code>withLoggedIn</code> wrapper to make the API more concise.
        </li>
      </ol>
    </div>
  )
}

export default Home
