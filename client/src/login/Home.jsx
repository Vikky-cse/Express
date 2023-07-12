import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <><h2>
          Home
      </h2><Link to="/expense">expense tracker</Link></>
  )
}

export default Home
