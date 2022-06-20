import React from 'react'
import Navbars from './Navbar'

export default function MainLayout({children}) {
  return (
    <div>
        <Navbars/>
        {children}
        
    </div>
  )
}
