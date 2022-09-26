import { Link } from 'react-router-dom'

export default function CustomComponentPage() {
  return (
    <div>
      <h1>Custom route component method</h1>
      <p>This method is an improvement!</p>
      <strong>Pros:</strong>
      <ul>
        <li>
          Logic is centralized in one place (<code>routes/LoggedInRoute.tsx</code>
          ). Easy to locate, maintain, and update
        </li>
        <li>
          If the user is not logged in, they will never make it to this page, and any{' '}
          <code>useEffects()</code> or side effects will never run at all
        </li>
      </ul>
      <strong>Cons:</strong>
      <ul>
        <li>
          Unfortunately, the syntax is a bit more verbose for the developer. A one line route
          definition became 7 lines, with a nested component inside of it.
        </li>
      </ul>
      <p>
        Let's try one more iteration, with an eye towards eliminating this annoyance.{' '}
        <Link to="/">Go back home</Link>.
      </p>
    </div>
  )
}
