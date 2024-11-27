import React, { useEffect } from 'react'
import hospital2 from '../../assets/hospital2.webp'
import hospitalicon from '../../assets/hospitalicon.webp'
import { BsGraphDown, BsGraphUpArrow } from 'react-icons/bs'
import { FaRegMoneyBill1 } from 'react-icons/fa6'
// import './recovery.css'
import recovery2 from '../../assets/recovery1.png'
import recovery4 from '../../assets/recovery4.png'
import recovery3 from '../../assets/recovery3.webp'
import recovery5 from '../../assets/recovery5.png'
import recoveryicon from '../../assets/recoveryicon.webp'
import imaging from '../../assets/imaging.webp'
const PhsicalBilling = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div >
            <div className='diff_bg'>
                <div className='container pt-5'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12 '>
                            <h2>Physician Billing Services</h2>
                            <p>The abilities needed to establish a successful practice are skills that doctors spend years honing. Even so, it may be quite difficult to stay current with the rapidly evolving subject of revenue cycle management. Aging accounts receivable recovery is one of the many areas of physician billing and administration solutions handled by The sure ways solutions. Additionally, we provide a comprehensive array of medical revenue cycle management services that are specifically designed to meet your needs.

                            </p>
                            <h2>Allowing Physicians to Concentrate on their True Priorities</h2>
                            <p>The sure ways solutions handles revenue cycle management (RCM) from beginning to end, allowing clinicians to focus entirely on patient care with no interference from administrative duties.</p>
                            {/* <button className='btn btn_demo'>Free AR Analysis</button> */}
                        </div>
                        <div className='col-lg-6 col-12'>
                            <img src={imaging} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='demo p-lg-5 p-2'>
                <div className='container '>
                    <div className='row justify-content-between'>
                        <div className='col-lg-12 col-12'>
                            <h2 className='clr'>The sure ways solutions is hired to handle medical billing for doctors.</h2>
                            <div className='demo_box d-flex'>
                                {/* <img src={demo} alt="" className='choose_icons'/> */}
                                <BsGraphDown className='icon_height2' />
                                <div className='d-block ms-3'>
                                    <h5>Higher Revenue
                                    </h5>
                                    <p>We have the knowledge and expertise as a primary care physician billing firm to continuously increase income for our clients. Our tried-and-true system guarantees an easy transfer to our services, prompt claim submission, and efficient payment administration.</p>
                                </div>

                            </div>
                            <div className='demo_box d-flex'>
                                {/* <img src={demo} alt="" className='choose_icons'/> */}
                                <BsGraphUpArrow className='icon_height2' />
                                <div className='d-block ms-3'>
                                    <h5>Feeling of financial safety
                                    </h5>
                                    <p>In order to give our clients real-time access to financial information and the status of each step in the claim submission process, The sure ways solutions offers secure and open physician billing solutions.</p>
                                </div>
                            </div>
                            <div className='demo_box d-flex'>
                                {/* <img src={demo} alt="" className='choose_icons'/> */}
                                <FaRegMoneyBill1 className="icon_height2" />
                                <div className='d-block ms-3'>
                                    <h5>Customer Contentment
                                    </h5>
                                    <p>One of our top priorities is offering top-notch customer service. We provide medical billing solutions to assist in resolving claims and other revenue management difficulties so that doctors may concentrate on providing high-quality patient care.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* <div className='col-lg-6 col-12 '>
                            <h2 className='clr'>Schedule a Demo</h2>
                            <p className='mb-0'>A member of our team will get back to you within <strong>24/48 hours</strong> .</p>
                            <p>For immediate service, give us a call at <strong>281-904-9237</strong> .

                            </p>
                            <div className='bg_demo'>
                                <div className='demo_box2 justify-content-around d-lg-flex d-block'>
                                    <div className=''>
                                        <label for="exampleInputEmail1" class="form-label text-dark">Name</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className=''>
                                        <label for="exampleInputEmail1" class="form-label text-dark">
                                            Business Name</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className='demo_box2 mt-3 justify-content-around d-lg-flex d-block'>
                                    <div className=''>
                                        <label for="exampleInputEmail1" class="form-label text-dark">Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className=''>
                                        <label for="exampleInputEmail1" class="form-label text-dark">
                                            Business Name</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div class="mb-3 demo_box2 mt-3 justify-content-around px-lg-4 px-0">
                                    <label for="exampleFormControlTextarea1" class="form-label text-dark">Your Message
                                    </label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className='text-center px-4'>

                                    <button className='btn btn_demo w-100 p-2 text-white px-4'>Submit Now</button>
                                </div>
                            </div>

                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div className='bg_recover text-center p-5'>
                <h1 className='text-white'>SYSTEMATICALLY INCREASING REVENUE WITH EFFECTIVE CLAIMS MANAGEMENT</h1>
                <p className='text-white'>The sure ways solutions’s innovative system tracks every claim to completion, getting our clients the revenue they deserve.</p>
                <div className='d-flex justify-content-center text-center gap-3'>
                    <button className='btn btn_demo'>Click to Call
                    </button>
                    <button className='btn btn_demo'>Schedule Demo</button>
                </div>
            </div> */}
            <div className='container pt-5'>
                <h2 className='clr text-center mb-5'>We Offer The Essential Services to Boost Claims, Avoid Rejections, and Increase Revenue</h2>
                {/* <p className='text-center'>Our strategy for managing aging AR accounts has been developed through years of experience. Our old AR recovery service is a streamlined approach that is both fast and effective.</p> */}
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <h3>Complete RCM Services Offering</h3>
                        <p> The sure ways solutions enhances all facets of RCM, including patient scheduling, payer credentialing, insurance verification, charting and coding review, claims administration, and much more, with our cutting-edge physician's revenue cycle management solution.
We work hard to protect your company's financial stability and reduce the hassle of dealing with insurance companies. To simplify your billing procedure and maximize revenue for your clinic, we provide medical billing services for all specialties in a single package.
</p>
                    </div>
                    <div className='col-lg-6 col-12 text-center'>
                        <img src={recovery2} alt="" className='mb-5' />
                    </div>
                </div>
            </div>
            <div className='diff_bg'>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-12 text-center'>
                            <img src={recovery3} alt="" className='mb-5' />
                        </div>
                        <div className='col-lg-6 col-12'>
                            <h3>Management of Denialism and Rejection</h3>
                            <p>Due to errors in medical billing that cause payers to reject or deny claims, doctors lose a substantial portion of their income. Our first-rate physician billing services keep track of every claim, ensuring that none of your hard-earned money is lost due to unresolved claims. The information provided by the analytical reports we frequently provide is necessary to locate and remove typical bottlenecks in the procedure for resolving claim and pre-authorization difficulties.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container pt-5'>
                <div className='row'>

                    <div className='col-lg-6 col-12'>
                        <h3>Old Account Receivables</h3>
                        <p>We frequently discover that aged AR accounts are costing new clients a sizable amount of money. Our claim management system has a procedure for sorting out old accounts receivable so that we may collect the most money possible from them. Many times, all that is required is a basic explanation of what the payment is for and the proper notification of the relevant person, whether it be the payer or the patient them self. We streamline the medical billing process as a physician billing firm, which lowers costs and increases revenue collection.

                        </p>
                    </div>
                    <div className='col-lg-6 col-12 text-center'>
                        <img src={recovery4} alt="" className='mb-5' />
                    </div>

                </div>
            </div>
            <div className='diff_bg'>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-12 text-center'>
                            <img src={recovery5} alt="" className='mb-5' />
                        </div>
                        <div className='col-lg-6 col-12'>
                            <h3>Secure data management that complies with HIPAA</h3>
                            <p>We employ the same degree of online security measures that banks do to protect patient information. When we handle your billing, you don't need to worry about HIPAA compliance. Our medical industry-specific security and confidentiality requirements were taken into account when designing our physician billing management system. Since 2013, The sure ways solutions, a top HIPAA-compliant physician medical billing firm, has provided the market with a variety of services for medical practice revenue cycle management.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container pt-5'>
                <h2 className='clr text-center'>Tracking and Management of Missed Encounters
                </h2>
                <p className=' text-center'>Patients who just don't show up for their appointments waste a lot of time and money. Our system keeps track of the issues and aids in problem solving. With the help of The sure ways solutions's cutting-edge physician billing and management solutions, you can simply interact with your patients and follow the progression of encounters throughout the whole process. Our open system makes it easier to establish fee schedules, track interactions, manage copays, and spot any visits that have unpaid bills.</p>
                <div className='row pt-4'>
                    <div className='col-lg-12  mb-3 d-lg-flex d-block gap-3'>

                        <div className='col-lg-12  col-12 bg-transparent revenue_box'>
                            <img src={recoveryicon} alt="" />
                            <h2>
                            Charting & Coding Review in accordance with governing bodies</h2>
                            <p>In order to make sure that your internal policies are being followed, the work is continuing to meet your standards, and everything is being done in compliance with the regulations established by regulatory bodies and government payers, doing reviews is necessary for any practice. Our team of specialists in physician billing administration is well-versed in identifying any software flaws and making sure that your practice is operated according to your preferences. To ensure dependable revenue flow and long-term profitability, our medical billers submit precise claim forms with proper CPT codes.</p>
                        </div>
                        {/* <div className='col-lg-4 col-12 revenue_box'>
                            <img src={recoveryicon} alt="" />
                            <h2>
                                All Claims Pursued:</h2>
                            <p>Many billing companies avoid small claims recovery and those that have a lower likelihood of being paid, but not The sure ways solutions. Our system’s efficiency allows us to reduce medical account receivables by getting reimbursement for every claim.</p>
                        </div>
                        <div className='col-lg-4 col-12 revenue_box'>
                            <img src={recoveryicon} alt="" />
                            <h2>
                                All Claims Pursued:</h2>
                            <p>Many billing companies avoid small claims recovery and those that have a lower likelihood of being paid, but not The sure ways solutions. Our system’s efficiency allows us to reduce medical account receivables by getting reimbursement for every claim.</p>
                        </div> */}
                    </div>

                </div>
                {/* <div className='row pt-4'>
                    <div className='col-lg-12 d-lg-flex d-block gap-3'>

                        <div className='col-lg-4 col-12 revenue_box'>
                            <img src={recoveryicon} alt="" />
                            <h2>
                                All Claims Pursued:</h2>
                            <p>Many billing companies avoid small claims recovery and those that have a lower likelihood of being paid, but not The sure ways solutions. Our system’s efficiency allows us to reduce medical account receivables by getting reimbursement for every claim.</p>
                        </div>
                        <div className='col-lg-4 col-12 revenue_box'>
                            <img src={recoveryicon} alt="" />
                            <h2>
                                All Claims Pursued:</h2>
                            <p>Many billing companies avoid small claims recovery and those that have a lower likelihood of being paid, but not The sure ways solutions. Our system’s efficiency allows us to reduce medical account receivables by getting reimbursement for every claim.</p>
                        </div>
                        <div className='col-lg-4 col-12 revenue_box'>
                            <img src={recoveryicon} alt="" />
                            <h2>
                                All Claims Pursued:</h2>
                            <p>Many billing companies avoid small claims recovery and those that have a lower likelihood of being paid, but not The sure ways solutions. Our system’s efficiency allows us to reduce medical account receivables by getting reimbursement for every claim.</p>
                        </div>
                    </div>

                </div> */}
            </div>
            <div className='bg_reco p-5'>
                <div className='text-start text-white'>
                    <p>The sure ways solutions is an industry leader and trusted name in medical accounts receivable collections because we know how to get results. Our mastery of complex medical coding and AR management services sets us apart. But it’s our breadth of knowledge that allows us to shine. Our medical billing company successfully serves healthcare facilities of all types and sizes, and we specialize in medical billing for physicians, laboratories, radiology & imaging centers, and hospitals.
                        We know it’s difficult to remain entirely focused on patient care when you’re worried about your bottom line. If you’re spending valuable time and energy trying to diagnose finances, then perhaps it’s time to enlist the aid of a professional medical billing company like The sure ways solutions.</p>
                </div>

            </div>
        </div>
    )
}

export default PhsicalBilling
