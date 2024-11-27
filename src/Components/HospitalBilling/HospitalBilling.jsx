import React, { useEffect } from 'react'
import hospital from '../../assets/hospital.webp'
import './hospital.css'
import hospitalicon from '../../assets/hospitalicon.webp'
import hospital2 from '../../assets/hospital2.webp'
import hospital3 from '../../assets/hospital3.webp'
import hospital4 from '../../assets/hospital4.webp'
import hospital5 from '../../assets/hospital5.webp'
import { NavLink } from 'react-router-dom'
const HospitalBilling = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <div className='diff_bg p-lg-5 p-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12'>
                            <h1>Hospital Revenue Cycle Management</h1>
                            <p>For your healthcare organization's particular demands, The sure ways solutions offers a wide variety of hospital billing solutions. We provide practice management, patient engagement, electronic health record/electronic medical record (EHR/EMR) technology, hospital revenue cycle management services, and medical accounts receivable (AR recovery) services.</p>
                            {/* <button className='btn btn_demo'>Increase Collections</button> */}
                        </div>
                        <div className='col-lg-6 col-12 text-center'>
                            <img src={hospital} alt="" className='img-fluid img_size' />
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
                            <h2 className='clr'>Resource Allocation and Billing Administration Reduction</h2>
                            <p>To fulfill the specific requirements of your healthcare institution, The sure ways solutions provides a wide variety of hospital billing solutions. We provide practice management, patient engagement, electronic health record/electronic medical record (EHR/EMR) technology, medical accounts receivable (AR recovery services), and hospital revenue cycle management services.</p>
                          <NavLink to="/contact" className="ms-0">
                          <button className='btn btn_demo'>Schedule Demo</button>
                          </NavLink>
                           
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
                            <h2 className='clr'>We Heal. Your Revenue</h2>
                            <p>Each year, billions of dollars are lost as a result of ineffective billing systems. In actuality, the vast majority of claims have processing flaws that need to be fixed. For effective hospital billing and collection services, The sure ways solutions keeps up with the frequently changing legislation and compliance standards. To ensure error-free claims and maximum recovery, our billing department offers a comprehensive variety of individualized, specially designed hospital billing services.</p>
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
                            <img src={hospital4} alt="" className='img-fluid ' />
                        </div>
                        <div className='col-lg-6 col-12'>
                            <h2 className='clr'>
                                We handle claim denials and do away with common mistakes</h2>
                            <p>As a medical billing business, we are aware that even the smallest mistakes may result in claim denials, and every claim that needs to be reprocessed costs you money. If you currently handle all of your medical billing internally, each time a claim is submitted, overhead costs rise and you lose money. It is frequently the responsibility of doctors, nurses, and other staff members to identify and correct expensive hospital billing problems. The time spent on administrative chores detracts from the time spent caring for patients and adds extra stress to medical staff.</p>
                            {/* <button className='btn btn_demo'>Schedule Demo</button> */}
                        </div>

                    </div>

                </div>
            </div>
            <div className=' p-lg-5 p-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12 text-center'>
                            <img src={hospital5} alt="" className='img-fluid ' />
                        </div>
                        <div className='col-lg-6 col-12'>
                            <h2 className='clr'>
                                We Care About Your Success</h2>
                            <p>At The sure ways solutions, we address the hospital billing and collection process from every angle. In addition to hiring the most talented individuals, we also make significant investments in cutting-edge medical billing software to deliver services that are unmatched. Our internal quality control procedures assure correct claims and a flawless billing process the first time around as a hospital billing business. From pre-admission processes through coding, AR management, collections and follow-up, to precise real-time reporting, we provide end-to-end services. Reduced operational expenses, improved reimbursement and collection ratios, and the recovery of accounts receivable going back as long as a full year are among benefits that our hospital clients experience. The income stream and financial health of your hospital can be greatly impacted by unpaid claims, denied claims, and underpayments. It may have an adverse effect on your main objective, patient care. Accurate charge input with the proper billing codes is now more important than ever for institutional billing due to the rise in the number of insured Americans. Looking for Impact on Revenue? Contact us!

                            </p>
                            <NavLink to="/contact" className="ms-0">
                          <button className='btn btn_demo'>Schedule Demo</button>
                          </NavLink>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default HospitalBilling
