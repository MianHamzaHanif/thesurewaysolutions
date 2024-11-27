import React from 'react'
import testi from '../../assets/testi.webp'
const Testimonial = () => {
  return (
    <div className='diff_bg p-5'>
      <div className='container p-2'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-12'>
            <h2>Customer Testimonials</h2>
            <p>What People Say About Working With The sure ways solutions</p>
            <p>The sure ways solutions strives to provide the best customer support and continuous improvement of its products and services.</p>
            <button className='btn btn_demo text-white'>Demo</button>
          </div>
          <div className='col-lg-6'>
            <img src={testi} className='img-fluid' alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Testimonial
