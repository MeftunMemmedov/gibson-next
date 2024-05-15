'use client'
import { darkModeOn, darkModeOff, toggleDarkMode} from '@/redux/globalSlice'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDarkMode , MdLightMode} from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { redirect } from 'next/dist/server/api-utils'
import { useCart } from 'react-use-cart'


const Header = () => {
  const dispatch=useDispatch()
  const {darkMode}=useSelector(store=>store.global)
  const {isEmpty, items}=useCart()


  return (
    <>
      <header className='bg-color-1 position-sticky top-0 text-light'>
        <div className="container  h-100">
          <div className="row h-100">

            <div className="col-md-1 col-2 p-0">
              <img src='https://images.ctfassets.net/m8onsx4mm13s/72p8qgeqA4UK7FD2MwyA19/cbc4a71ff92b788b791a53fa683dc6f4/gibson__1_.svg'
              className='shadow w-100 h-100 object-fit-cover'
              />
            </div>
             
            <div className="col-md-6 col-1">
              <nav className='d-md-flex justify-content-around align-items-center h-100 d-none'>
                <Link href='/' className='nav-link'>Home</Link>
                <Link href='/shop' className='nav-link'>Shop</Link>
                <Link href='/about' className='nav-link'>About</Link>
                <Link href='/contact' className='nav-link'>Contact</Link>
              </nav>
            </div>

            <div className='col-md-3 col-6 border-start border-end'>
              <div className="row h-100 d-flex align-items-center">

                <div className="col-4 d-flex justify-content-center">
                  <button onClick={()=>dispatch(toggleDarkMode())} className='btn'>
                    {darkMode?<MdLightMode size={30} color='white'/> : <MdDarkMode size={30} color='white'/>}
                  </button>
                </div>
                <div className="col-4 d-flex justify-content-center position-relative">
                  <Link href='' className='nav-link'><CiShoppingCart size={35}/></Link>
                  {
                    isEmpty?"":<span className='position-absolute end-0 px-2 me-3 bg-danger rounded-circle'>{items.length}</span>
                  }
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <Link href='' className='nav-link'><FaHeart size={25}/></Link>
                </div>
                

              </div>
            </div>

            <div className="col-md-2 col-3 d-flex justify-content-center align-items-center">
                  <Link href='/login' className='btn btn-light w-100'>Sign-In</Link>
                </div>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header
