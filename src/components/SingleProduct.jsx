import React from 'react'

const SingleProduct = ({product, key}) => {
  return (
    <>
      <div className="col-3 homepage-product-container ">
        <div className="row h-100 border">

            <div className="col-12 h-75 homepage-product-img border-bottom">
                <img src={product.image_1} className='w-100 h-100 object-fit-contain'/>
            </div>

            <div className="col-12 h-25">
                <div className="row h-100">

                    <div className="col-12 h-50 d-flex justify-content-start align-items-start">
                        <h4>{product.name}</h4>
                    </div>
                    
                    <div className="col-6 h-25">
                        <h6>{product.price}</h6>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
