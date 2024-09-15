import React from 'react'
import Container from '../../container/Container'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <Container>
        <div className='flex items-center justify-center h-screen'>
          <strong>Page Not Found</strong>
        </div>
      </Container>
    </div>
  )
}

export default NotFound