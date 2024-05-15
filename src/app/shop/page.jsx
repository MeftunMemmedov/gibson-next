'use client'
import SingleShopProduct from '@/components/SingleShopProduct'
import { getProducts } from '@/redux/globalSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Shop = () => {
    const dispatch=useDispatch()
    const {products,darkMode}=useSelector(store=>store.global)
    console.log(products)
    
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  return (
    <>
      <div className= {`shop-page ${darkMode?'bg-dark text-light':''}`}>
        <div className="container">


            <div className="row">
                {
                  products.map((product)=>{
                    return (
                      <>
                        <SingleShopProduct product={product} />
                      </>
                    )
                  })
                }
            </div>

        </div>
      </div>
    </>
  )
}

export default Shop
