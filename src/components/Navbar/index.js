import React from 'react'
import Navbar from './Navbar'
import NavbarWithTags from './NavbarWithTags'

export default function NavbarWrapper() {
  return (
    <React.Suspense fallback={<Navbar />}>
      <NavbarWithTags />
    </React.Suspense>
  )
}
