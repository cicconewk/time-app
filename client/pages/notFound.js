import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <div className='d-flex flex-column'>
      <h1 className="align-self-center">Oops! Resource not found!</h1>
      <Link className='btn btn-primary p-5' to="/">Return to Home</Link>
    </div>
  )
}
