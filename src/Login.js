import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>        
        <Link to={'/Body'} class='ps-4'>
         <button type="button" class="btn btn-primary ">Login</button>
         </Link>
    </div>
  )
}

export default Login
