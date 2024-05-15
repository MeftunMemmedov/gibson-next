import React from 'react'

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">

            <div className="row">
                <div className="col-12 text-center py-5">
                    <h2>Contact Us</h2>
                </div>
            </div>

            <div className="row ">
                <div className="col-6 border">Map</div>
                <div className="col-6 border bg-dark text-light py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>Shop Details</h3>
                            <h2 className='fw-bold text-center' style={{fontSize:"60px"}}>-</h2>
                        </div>
                        
                        <div className="col-12 d-flex justify-content-center text-center fw-bold">
                            <ul className='list-unstyled'>
                                <li>Gibson LTD</li>
                                <li>80-82 West Street</li>
                                <li>Farnham, Surrey</li>
                                <li className='mb-5'>GU9 7EN, UK</li>

                                <li>Tel: +44 (0)1252 726821</li>
                                <li>Email: sales@guitarvillage.co.uk</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <input type="text" name="" id="" />
                </div>
                <div className="col-6">
                    <input type="text" name="" id="" />
                </div>
                <div className="col-6">
                    <input type="text" name="" id="" />
                </div>
                <div className="col-6">
                    <input type="text" name="" id="" />
                </div>
                <div className="col-12">
                    <textarea name="" id=""></textarea>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
