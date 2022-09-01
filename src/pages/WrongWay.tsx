import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userLoggedIn } from '../auth'

export default function WrongWay() {
  const navigate = useNavigate()

  useEffect(() => {
    // After the page loads, check if the user is logged in
    // If they're not, redirect them to the homepage
    if (!userLoggedIn()) navigate('/home')
  })

  return (
    <div>
      <h1>Secret page for logged-in users only!</h1>
    </div>
  )
}
