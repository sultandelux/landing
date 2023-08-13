import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './index.scss'
import MaxtrixEffect from 'Components/MatrixEffect'

const Layout = (props) => {
  const [active, setActive] = useState(true)

  const handleActive = (bool) => {
    setActive(bool)
  }

  return (
    <>
      <div className='pattern-boxes pattern-gray-100 pattern-bg-white pattern-size-7"
   relative max-w-7xl mx-auto' style={{ opacity: 20 }}>
        <div className='relative pt-90px px-3 pb-50px flex-auto md:px-35px'>
          <Header handleActive={handleActive} />
          {props.children}
          <Footer />

        </div>
      </div>
      <div
        className={`sticky-rabbit ${active ? 'show-rabbit' : 'hide-rabbit'}`}
      />
    </>
  )
}

export default Layout
