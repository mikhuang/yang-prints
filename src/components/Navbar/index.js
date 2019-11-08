import React from 'react'
import Navbar from './Navbar'
import NavbarWithData from './NavbarWithData'

export default function NavbarWrapper() {
  return (
    <React.Suspense fallback={<Navbar />}>
      <NavbarWithData />
    </React.Suspense>
  )
}
