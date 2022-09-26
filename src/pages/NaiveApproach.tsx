import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

export default function NaiveApproach() {
  const { loggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    // Let's simulate a computation-heavy useEffect() that runs asynchronously
    // This is an extreme case, but it shows that the protected page's effects all execute BEFORE the redirect
    // In a real-world example, this might be a fetch to a protected database endpoint
    setTimeout(() => console.log('simulated an expensive useEffect()'), 500)
  })

  useEffect(() => {
    // After the page loads, check if the user is logged in
    // If they're not, redirect them to the homepage
    if (!loggedIn) navigate('/access-denied')
  })

  return (
    <div>
      <h1>"Naive" approach</h1>
      <p>
        This implementation isn't the end of the world, and it does keep the page mostly secure.
        However, there are a few downsides:
      </p>
      <ul>
        <li>
          The component renders once, before the <code>useEffect()</code> triggers a redirect
        </li>
        <li>
          <strong>Important:</strong> Because there is a redirect,{' '}
          <strong>the user's back button gets broken</strong>. Hitting "back" takes them to the
          protected page, instantly redirecting them again. This is a bad user experience!
        </li>
        <li>
          In addition, this can have performance impacts, especially if the page has other{' '}
          <code>useEffect()</code> calls which might fetch data or perform other network- or
          performance-heavy tasks
        </li>
        <li>
          This check must be done in every component &mdash; if the logic ever changes, it must be
          updated everywhere (a potential source of technical debt)
        </li>
        <li>
          The check is separated from the rest of the routing/auth logic and spread across the
          codebase, making it more difficult to track down and reason about
        </li>
      </ul>
      <p>
        We can do better! <Link to="/">Back home</Link>.
      </p>
    </div>
  )
}
