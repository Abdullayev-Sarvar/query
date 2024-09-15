import React from 'react'
import Container from '../../container/Container'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const token = localStorage.getItem("token")

  return (
    <nav className='bg-indigo-500'>
      <Container>
        <div className='py-4'>
          <ul className='flex items-center justify-around gap-4'>
            <li className='text-white text-xl transition-all hover:scale-95 hover:text-gray-600'><NavLink to='/'>Home</NavLink></li>
            <li className='text-white text-xl transition-all hover:scale-95 hover:text-gray-600'><NavLink to='/auth'>About</NavLink></li>
            {
              token ?
                <li className='text-white text-xl transition-all hover:scale-95 hover:text-gray-600'><NavLink to='/profile'>Profile</NavLink></li>
              :
                <li className='text-white text-xl transition-all hover:scale-95 hover:text-gray-600'><NavLink to='/auth/signup'>Sign Up</NavLink></li>
            }
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Navigation