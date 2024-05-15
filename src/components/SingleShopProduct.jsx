'use-client'
import { getProducts } from '@/redux/globalSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdStar } from "react-icons/io";
import Link from 'next/link';
import { useCart } from 'react-use-cart';


const SingleShopProduct = ({product, key}) => {
  
  const {darkMode}=useSelector(store=>store.global)
  const {addItem, inCart}=useCart()

  return (
    <>
      <div className="col-lg-4 col-6 product-container my-4" key={key}>
        <div className="row h-100 d-flex justify-content-center">

            <div className="col-10">
              <div className="row h-100">


                <div className="col-12 product-img-box border bg-light border h-75 overflow-hidden">
                  <img src={product.image_1} className='product-img'/>
                </div>


                <div className="col-12 product-info-box">
                  <div className="row border h-100">

                    <div className="col-9 h-50">
                      <h5 className='product-name'>
                        <Link href={`shop/${product.id}`} className='nav-link'>{product.name}</Link>
                      </h5>
                    </div>

                    <div className="col-3 h-50">
                      
                      <div className="row h-100">
                        <div className="col-4">*</div>
                        <div className="col-8"><h6 className='mt-1'>{product.rating}</h6></div>
                      </div>
                    </div>

                    <div className="col-4 d-flex justify-content-center align-items-center h-50">
                      <h6>${product.price}</h6>
                    </div>
                    <div className="col-8 h-50">
                      <button 
                      className={`w-100 h-75 ${darkMode?'text-light add-to-cart-btn-darkOn':'add-to-cart-btn-darkOff'}`}
                      onClick={()=>addItem(product)}

                      >Add to Cart</button>
                    </div>

                  </div>
                </div>

              </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default SingleShopProduct
