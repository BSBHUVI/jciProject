import React from 'react'
import { Link } from 'react-router-dom'

function Error404Page() {
  return (
    <div style={{marginTop:"17rem"}}>
      <h1 style={{textAlign:"center"}}>404 Error : Page not found</h1>
      <p style={{textAlign:"center"}}>please return back to home page by clicking <Link to="/">here</Link></p>
    </div>
  )
}

export default Error404Page
