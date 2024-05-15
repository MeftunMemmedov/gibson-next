'use client'
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaPersonRifle } from "react-icons/fa6";
import { MdOutlineStore } from "react-icons/md";
import { SiVerizon } from "react-icons/si";
import ReactStars from "react-rating-stars-component";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import { useSelector } from 'react-redux';




const ProductDetails = ({params}) => {
  const {darkMode}=useSelector(store=>store.global)
  const [product, setProduct]=useState([])

  const getProductDetails=async()=>{
    await axios.get(`https://bvucjugnfmiwylvzjbfg.supabase.co/rest/v1/Guitars?id=eq.${params.productId}&select=*`,
    {
      headers:{
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2dWNqdWduZm1pd3lsdnpqYmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNDk3NjEsImV4cCI6MjAyMjYyNTc2MX0.0mT_woheBI69jpBoO_kXeFiCytD21EVL6TJeqec91dg" ,
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2dWNqdWduZm1pd3lsdnpqYmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNDk3NjEsImV4cCI6MjAyMjYyNTc2MX0.0mT_woheBI69jpBoO_kXeFiCytD21EVL6TJeqec91dg"
      }
    }
  )
  .then(res=>setProduct(res.data))
  }


  const images = [
    {
      original: product.image_1,
      thumbnail: product.image_1,
      originalHeight:'450',
      thumbnailClass:'h-100'
    },
    {
      original: product.image_2,
      thumbnail: product.image_2,
      originalHeight:'450',
      thumbnailClass:'h-100'
    },
    {
      original: product.image_3,
      thumbnail: product.image_3,
      originalHeight:'450',
      thumbnailClass:'h-100'
    },
  ];

  useEffect(()=>{
    getProductDetails()
  },[])



  return (
    <div className={`container-fluid ${darkMode?"bg-dark text-light":""}`}>
      <div className="container">
        {
          product.map((product)=>{
            return (
              <>
              <div className="row product-details-1 py-5">

                <div className="col-lg-8 col-12">
                  
                    <ImageGallery items={images} thumbnailPosition='left' disableThumbnailScroll={true} showFullscreenButton={false} showPlayButton={false}/>
                
                </div>

                <div className="col-lg-4 col-12 rounded my-4 border product-details-info shadow py-4">
                  <div className="row h-100 d-flex flex-column justify-content-around">

                    <div className="col-12">
                      <h2>{product.name}</h2> 
                      <hr/>
                    </div>
                    
                    <div className="col-12">
                    <ReactStars
                      value={product.rating}
                      count={5}
                      onChange={'ratingChanged'}
                      size={50}
                      activeColor="#ffd700"
                    />
                      <hr/>
                    </div>

                    <div className="col-12">
                      <h3>${product.price}</h3>
                      <hr/>
                    </div>

                    <div className="col-12">
                      <button className='btn btn-dark w-100'>Add to Cart</button>
                    </div>

                    <div className="col-12 product-details-info-5">
                      <div className="row">
                        <div className="col-3 p-0 d-flex justify-content-end"><FaPersonRifle size={12}/></div>
                        <div className="col-9 px-1"><h6 >IN STOCK & READY TO ROCK</h6></div>

                        <Link href={''}  className='btn'>
                          <div className="row">
                            <div className="col-4 p-0 d-flex justify-content-end"><MdOutlineStore size={14} /></div>
                            <div className="col-8 px-2"><h6 className='text-start'>FIND IN STORE</h6></div>
                          </div>
                        </Link>

                      </div>
                    </div>

                    <div className="col-12">
                      <div className="row product-details-shipping">
                        <div className="col-6 d-flex">
                          <SiVerizon  className='mt-1' size={9}/>
                          <p>SETUP INCLUDED</p>
                        </div>
                        <div className="col-6 d-flex">
                          <SiVerizon  className='mt-1' size={9}/>
                          <p>FREE SHIPPING</p>
                        </div>
                        <div className="col-6 d-flex">
                          <SiVerizon  className='mt-1' size={9}/>
                          <p>LIFETIME WARRANTY</p>
                        </div>
                        <div className="col-6 d-flex">
                          <SiVerizon  className='mt-1' size={9}/>
                          <p>CASE INCLUDED</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* ---------- */}

              <div className="row">

                <div className="col-12">
                  <h2>{product.about_guitar_title}</h2>
                  <p>{product.about_guitar_description}</p>
                </div>

              </div>

              {/* ---------------- */}

              <div className="row">
                
              </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductDetails
