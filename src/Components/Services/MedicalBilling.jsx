import React, { useEffect } from 'react'

const MedicalBilling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='demo p-5'>
      <div className='container'>
        <h2 className='text-center'>With Our Innovative Medical Billing Services, You Can Boost Your Practice Services</h2>
        <div className='row pt-3 '>
          <div className='col-lg-12 d-lg-flex d-block gap-5  justify-content-center'>
          <div className='col-lg-5 col-12 text-start'>
            <p>Are you having trouble keeping up with the complexity of billing and revenue management at your medical practice? Not to worry! The sure ways solutions provides  medical  billing services that are tailored to each practice's particular requirements, regardless of size or specialty. We are committed to transforming medical billing for small practices and working to remove any stress from the process by making it more effective and compliant. We guarantee accurate and current coding with our tried-and-true system, doing away with errors and raising profits.</p>
          </div>
          <div className='col-lg-5 col-12 text-start'>
            <p>By contracting with us to handle your medical billing needs, you'll benefit from our team's dedication to boosting your revenue. Our experienced billers use a technique that has been designed to send claims promptly and keep track of each one so that any denials are handled effectively. We are able to reduce accounts receivable and obtain the most amount of reimbursements for our clients thanks to our expertise in getting claims reimbursed. Let our professionals handle your RCM.</p>
            <br className='d-lg-block d-none' />
          </div>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default MedicalBilling
