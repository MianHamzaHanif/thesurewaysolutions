import React, { useEffect } from 'react'
import imaging from '../../assets/imaging.webp'
import imagingicon from '../../assets/imagingicon.webp'
import imaging3 from '../../assets/imaging3.webp'
import imaging4 from '../../assets/imaging4.webp'
import { NavLink } from 'react-router-dom'
const ImagingCenter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <div className='diff_bg p-3'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                            <h1>Imaging Center Billing Services</h1>
                            <p>To accommodate the particular requirements of your imaging facility, The sure ways solutions offers a wide range of services. You may now rely on a single radiology medical billing business for services like patient engagement, electronic health record/electronic medical record (EHR/EMR) technology, accounts receivable recovery, revenue cycle management (RCM), and RCM.</p>
                            <p className='mt-4'>The processing of daily claims, accurate imaging billing, and coding, as well as diligent follow-up on all denials, are essential. The qualified radiology billing specialists at The sure ways solution are also familiar with the particular coding and billing specifications for mobile imaging, radiology, and free-standing imaging.
                            </p>
                            {/* <button className='btn btn_demo text-white'>Get More Information</button> */}
                        </div>
                        <div className='col-lg-6 col-12'>
                            <img src={imaging} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container'>
                <div className='row text-center pt-5'>
                    <div className='col-lg-12 d-lg-flex d-block gap-3'>
                        <div className='col-lg-3 col-12 revenue_box'>
                            <img src={imagingicon} alt="" />
                            <p className='mt-2 mb-2'>Started On</p>
                            <h5 className='clr'>May 3rd 2019</h5>
                        </div>
                        <div className='col-lg-3 col-12 revenue_box'>
                            <img src={imagingicon} alt="" />
                            <p className='mt-2 mb-2'>Started On</p>
                            <h5 className='clr'>May 3rd 2019</h5>
                        </div>
                        <div className='col-lg-3 col-12 revenue_box'>
                            <img src={imagingicon} alt="" />
                            <p className='mt-2 mb-2'>Started On</p>
                            <h5 className='clr'>May 3rd 2019</h5>
                        </div>
                        <div className='col-lg-3 col-12 revenue_box'>
                            <img src={imagingicon} alt="" />
                            <p className='mt-2 mb-2'>Started On</p>
                            <h5 className='clr'>May 3rd 2019</h5>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='diff_bg p-3'>
                <div className='container mt-5'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                            <h3>Billing Expertise for Contemporary Radiology Services</h3>
                            <p>Radiology is a rapidly evolving field, and The sure ways solutions's qualified coders offer the knowledge necessary to accurately code and submit claims in order to receive the highest possible reimbursements. Our billing firm assists laboratories in increasing profitability by streamlining the claim filing and cash flow processes.</p>
                           {/* <NavLink to="contact" className="ms-0">
                           <button className='btn btn_demo text-white'>Contact Us</button>
                           </NavLink> */}
                            
                        </div>
                        <div className='col-lg-6 col-12'>
                            <img src={imaging3} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <div className='container mt-5'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                            <img src={imaging4} alt="" className='img-fluid' />
                        </div>
                        <div className='col-lg-6 col-12'>
                            <h3 className='clr'>Complex Coding Resulted from New Technologies</h3>
                            <p>Because there are so many modern technology and treatments involved, coding for radiology clinics and diagnostic imaging facilities is challenging. With The sure ways solution's radiology billing services, you can be certain that you'll get paid for the time and care you've spent on patients for both technical and professional components. Many claims are refused owing to incorrect modifiers utilized with CPT codes. Coding is made more difficult by free-standing imaging facilities, mobile imaging (such ultrasound and x-ray), and free-standing radiological equipment. These are the kinds of particulars that the best billing businesses regularly handle to make your RCM method simpler.</p>
                            {/* <button className='btn btn_demo text-white'>Get Started</button> */}
                        </div>

                    </div>
                </div>
            </div>


        </>


    )
}

export default ImagingCenter
