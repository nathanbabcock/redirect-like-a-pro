import { Link } from 'react-router-dom'

export default function HigherOrderComponentPage() {
  return (
    <div>
      <h1>Higher-order component method</h1>
      <p>
        This method functions the same as a standard custom component, but now it has a convenient
        wrapper function (<code>withLoggedIn()</code>) that can be applied to any page. We get all
        the maintainability benefits, and route definitions are once again possible in a single line
        of code.
      </p>
      <p>
        Hooray! 🎉 <Link to="/">Go back home</Link>.
      </p>
    </div>
  )
}
