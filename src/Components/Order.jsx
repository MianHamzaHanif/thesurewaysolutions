import React, { useEffect } from 'react'
import hospital from '../assets/hospital.webp'
// import './hospital.css'
// import hospitalicon from '../../assets/hospitalicon.webp'
import hospital2 from '../assets/hospital2.webp'
import hospital3 from '../assets/hospital3.webp'
import hospital4 from '../assets/hospital4.webp'
import hospital5 from '../assets/hospital5.webp'
import order1 from '../assets/order1.webp'
import order2 from '../assets/order2.webp'
import workflow from '../assets/workflow.webp'
const Order = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <div className='diff_bg p-lg-5 p-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                            <h1>Management of Order and Demographics</h1>
                            <p>The success of your lab depends on giving patients high-quality treatment, which necessitates properly managing and processing test requests. Another crucial component of company success is being compensated for your labor, which is why we're here.</p>
                            <p>Our crew is made up of a team that concentrates on the "front-office" parts of lab orders in addition to our team of qualified billers. They make sure the order is submitted accurately so the right work is done and that you won't be refused payment due to missing information.</p>
                            {/* <button className='btn btn_demo'>Increase Collections</button> */}
                        </div>
                        <div className='col-lg-6 col-12 text-center'>
                            <img src={order1} alt="" className='img-fluid img_size' />
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className='container'>
                <div className='row pt-4'>
                    <div className='col-lg-12 d-lg-flex d-block gap-2'>
                        <div className='col-lg-3 col-12 revenue_box text-center'>
                            <img src={hospitalicon} alt="" />
                            <p className='mt-2'>Started On</p>
                            <h5 className='clr'>April 1st, 2019</h5>
                        </div>
                        <div className='col-lg-3 col-12 revenue_box text-center'>
                            <img src={hospitalicon} alt="" />
                            <p className='mt-2'>Started On</p>
                            <h5 className='clr'>April 1st, 2019</h5>
                        </div>
                        <div className='col-lg-3 col-12 revenue_box text-center'>
                            <img src={hospitalicon} alt="" />
                            <p className='mt-2'>Started On</p>
                            <h5 className='clr'>April 1st, 2019</h5>
                        </div>
                        <div className='col-lg-3 col-12 revenue_box text-center'>
                            <img src={hospitalicon} alt="" />
                            <p className='mt-2'>Started On</p>
                            <h5 className='clr'>April 1st, 2019</h5>
                        </div>
                    </div>
                </div>

            </div> */}
            <div className='diff_bg p-lg-5 p-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                            <h2 className='clr'>Successful Order Management</h2>
                            <p>Lab orders must be input into the system swiftly and accurately in order to provide quality patient care. The many tasks that internal staff members may be assigned might lead to overwork or distraction, which can slow down order input or result in data inaccuracies. Pay close attention to the details since even minor inaccuracies that don't affect the validity of the lab findings, such a mismatched date or misspelled name, may lead the claim to be rejected and prevent you from being paid for the service.</p>
                            <p> The sure ways solution staff will input your orders into the LIS swiftly and accurately, regardless of whether they are in manual, email, or EMR format (or more often, a combination of all three).</p>
                            <button className='btn btn_demo'>Schedule Demo</button>
                        </div>
                        <div className='col-lg-6 col-12 text-center'>
                            <img src={hospital2} alt="" className='img-fluid img_size' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='p-lg-5 p-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                            <h2 className='clr'>What Sets the Services Off at The sure ways solution?</h2>
                            <p>What Sets the Services Off at The sure ways solution?</p>
                            {/* <button className='btn btn_demo'>Schedule Demo</button> */}
                        </div>
                        <div className='col-lg-6 col-12 text-center'>
                            <img src={hospital3} alt="" className='img-fluid' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='diff_bg p-lg-5 p-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12 text-center'>
                            <img src={order2} alt="" className='img-fluid ' />
                        </div>
                        <div className='col-lg-6 col-12'>
                            <h2 className='clr'>
                            There are standalone services available.</h2>
                            <p>Each client's demands are met by the services that The sure ways solutions provides. Our revenue cycle management team comprises specialists in the front- and back-office duties that are crucial to any medical firm, in addition to medical billing and coding services. If that's all you require, separate services for order administration, demographic entry, insurance verification, etc. are also offered.</p>
                            {/* <button className='btn btn_demo'>Schedule Demo</button> */}
                        </div>

                    </div>

                </div>
            </div>
            <div className=' p-lg-5 p-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-12 col-12 text-center'>
                            <h1 className='text-center'>Workflow</h1>
                            <img src={workflow} alt="" className='img-fluid mt-3' />
                        </div>
                       

                    </div>

                </div>
            </div>
        </>

    )
}

export default Order
