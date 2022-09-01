import { userLoggedIn } from '../auth'

export default function WrongWayV2() {
  return userLoggedIn() ? (
    <div>
      <h1>Secret page for logged-in users only!</h1>
    </div>
  ) : (
    <div>You must be logged in.</div>
  )
}
