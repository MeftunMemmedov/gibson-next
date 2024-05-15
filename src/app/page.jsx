'use client'

import SingleProduct from '@/components/SingleProduct'
import { darkModeOff, darkModeOn, getProducts } from '@/redux/globalSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



const Page = () => {
    const dispatch=useDispatch()
    const {products, darkMode}=useSelector(state=>state.global)
    const darkModeLS=localStorage.getItem('darkMode')
    let slicedProducts=products.slice(0,4)

    console.log(products)

    
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  return (
    <>      
      <div className={`container-fluid homepage-box-1 border border-primary ${darkMode?'bg-dark': ''}`}>
   
        <div className="row h-100">

          <div className="col-6 border border-danger">
            -
          </div>
          <div className="col-6 border border-danger d-flex justify-content-center align-items-end">
            <h1>Best Guitars for You</h1>
            <button>View</button>
          </div>

        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="row">
            {
              slicedProducts.map((product)=>{
                return (
                  <>
                  <SingleProduct product={product} />
                  </>
                )
              })
            }
        </div>
      </div>
    </>
  )
}

export default Page
