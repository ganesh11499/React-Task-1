import React from 'react'
import blackimg from './task5.jpg'
import { Link } from 'react-router-dom'


function Body() {
  return (
    <div class='row text-center'>
      <div class='col-lg-6 col-md-12 col-sm-12'>
        <img src={blackimg} height='400px' width='350px' />
      </div>
      <div class='col-lg-6 col-md-12 col-sm-12 mt-5 text-center'>
         <h3 class='text-primary'>Web Developer</h3>
         <p class='text-danger'>Full stack developer</p>
         <h4 class='text-warning mt-5'>Very Good in React Js</h4>
         <Link to={'/'}>
         <button type="button" class="btn btn-primary">Logout</button>
         </Link>
         <Link to={'/Slide'} class='ps-4'>
         <button type="button" class="btn btn-primary ">Slide</button>
         </Link>
      </div>
    </div>
  )
}

export default Body
