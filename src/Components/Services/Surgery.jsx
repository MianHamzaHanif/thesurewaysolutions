import React, { useEffect } from 'react'
import hospital2 from '../../assets/hospital2.webp'
import hospitalicon from '../../assets/hospitalicon.webp'
// import './recovery.css'
import recovery2 from '../../assets/recovery1.png'
import recovery4 from '../../assets/recovery4.png'
import recovery3 from '../../assets/recovery3.webp'
import recovery5 from '../../assets/recovery5.png'
import surgery from '../../assets/surgery.webp'
import recoveryicon from '../../assets/recoveryicon.webp'
import { NavLink } from 'react-router-dom'
const Surgery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div >
            <div className='diff_bg'>
                <div className='container pt-5'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12 '>
                            <h2>Services for Ambulatory Surgery Center (ASC) Billing</h2>
                            <p>Although ambulatory surgical centers (ASCs) have a considerably smaller medical billing team to handle any concerns or problems that may occur, they face the same billing challenges as hospitals. The stress brought on by attempting to keep up with the intricate coding rules while operating a profitable surgical center is reduced when medical billing is outsourced to The sure ways solutions.

                            </p>
                            {/* <button className='btn btn_demo'>Free AR Analysis</button> */}
                        </div>
                        <div className='col-lg-6 col-12'>
                            <img src={surgery} alt="" className='img-fluid mb-5'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg_recover text-center p-5'>
                <h1 className='text-white'>AVOIDING THE PROBLEM OF INCREASING COSTS AND DECREASING REIMBURSEMENTS WITH EFFECTIVE REVENUE CYCLE MANAGEMENT</h1>
                <p className='text-white text-center'>For ambulatory surgery facilities, The sure ways solutions reduces billing confusion and raises income.</p>
                <div className='d-flex justify-content-center text-center gap-3'>
                   <NavLink to="/contact" className="ms-0">
                   <button className='btn btn_demo'>Schedule Demo</button>
                   </NavLink>
                   
                </div>
            </div>


            <div className='container pt-5'>
                <h2 className='clr text-center'>The Need for ASCs to Take an Aggressive Approach to Medical Billing
                </h2>
                {/* <p className=' text-center'>A tremendous amount of revenue is lost every year due to unpaid claims not being managed properly. We have a dedicated AR recovery team that is extremely successful at getting reimbursements for what others consider “uncollectible.” It is well known in the collections industry that the longer a bill goes unpaid, the less likely it is to be paid—but rather than giving up on old AR recovery & bills. Our account receivables services team takes that as our cue to take immediate action towards identifying and investigating every unpaid claim. Few medical AR billing services are willing to take on aging AR, or if they do, they want a high fee. Our system streamlines the process, allowing us to be efficient enough to work profitably on old AR Recoveries and low-value claims. These are some of the features of our AR recovery system.</p> */}
                <div className='row pt-4'>
                    <div className='col-lg-12 d-lg-flex d-block gap-3'>

                        <div className='col-lg-4 col-12 revenue_box'>
                            {/* <img src={recoveryicon} alt="" /> */}
                            <h5>
                            Negotiating the Out-of-Network Reimbursement Rate</h5>
                            <p>Although payments from insurance networks and public payers are rigid, ASC income can be significantly increased by securing favorable out-of-network provider rates. The process of obtaining the best prices is difficult, and payers have tenacious negotiators working for them. To guarantee that the greatest possible reimbursements are received for our ASC billing services, The sure ways solutions has a trained negotiating team that is familiar with the procedure from start to finish.</p>
                        </div>
                        <div className='col-lg-4 col-12 revenue_box'>
                            {/* <img src={recoveryicon} alt="" /> */}
                            <h5>
                            Planning for patients</h5>
                            <p>Patient scheduling is the first step in the medical revenue cycle, and success in obtaining payments depends on completing this phase correctly. Our team of skilled ASC billing specialists will make sure that all necessary information is gathered throughout the intake and scheduling process and that it is accurately documented.</p>
                        </div>
                        <div className='col-lg-4 col-12 revenue_box'>
                            {/* <img src={recoveryicon} alt="" /> */}
                            <h5>
                            Verifying Benefits</h5>
                            <p>There are restrictions on what may be reimbursed for ambulatory surgical center billing, even if doctors in an ASC may conduct the identical treatments at a hospital. Benefits verification is particularly crucial in that situation since the ASC will not be compensated if any treatment or operation is provided that is not on the authorized list. The team of qualified experts at The sure ways solutions ensures that suggested activities are covered by the patient's coverage, making the services offered reimbursable.</p>
                        </div>
                    </div>

                </div>
                <div className='row pt-4'>
                    <div className='col-lg-12 d-lg-flex d-block gap-3'>

                        <div className='col-lg-4 col-12 revenue_box'>
                            {/* <img src={recoveryicon} alt="" /> */}
                            <h2>
                            Specific Coding Conditions</h2>
                            <p>Even while all healthcare facilities utilize the same ambulatory surgical center billing codes established by the Centers for Medicare and Medicaid Services (CMS), surgical procedures typically call for specific modifiers. The whole claim will be rejected if a modifier is omitted or used inappropriately. Each claim is "scrubbed" by an experienced medical biller as part of The sure ways solutions's normal operating procedure to make sure the coding information is accurate before the claim is filed.</p>
                        </div>
                        <div className='col-lg-4 col-12 revenue_box'>
                            {/* <img src={recoveryicon} alt="" /> */}
                            <h2>
                            Focus on Revenue Cycle Management</h2>
                            <p>The sure ways solutions has increased its proficiency in ambulatory surgical medical billing and coding over the past ten years and has now extended its scope to include all facets of medical revenue cycle management (RCM). Our continued success and steady expansion are largely attributable to the protocols we've established, which our highly skilled personnel adheres to in order to guarantee that every customer receives the same superior ambulatory services. To assist you get the most money possible, we submit precise codes in accordance with CMS requirements.</p>
                        </div>
                        <div className='col-lg-4 col-12 revenue_box'>
                            {/* <img src={recoveryicon} alt="" /> */}
                            <h2>
                            Electronic system updates that are ongoing</h2>
                            <p>Every year, medical billing codes are updated, and several payers and insurance frequently modify their rules. Utilizing the most up-to-date EHR/EMR software and technology is necessary to operate efficiently in the medical billing and coding environment of today. In order to keep our software current and our system protecting patient information at the greatest security level possible, our ASC billing firm closely collaborates with programmers and security developers.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg_reco p-5 mt-4'>
                <div className='text-start text-white'>
                    <h5 className='text-white'>A Creative, Scalable Method</h5>
                    <p>Much more than just processing claims is done by The sure ways solutions. Complete medical revenue cycle management (RCM), from pre-appointment scheduling to handling collections, is part of our creative approach to ASC billing services. Another essential component of our efficient system is ongoing training, which keeps our billers and coders current. We have been able to form a group of professionals that are knowledgeable about the details of coding for ambulatory surgical centers among many other disciplines in the medical industry by building a sizable, highly educated team of medical billing and coding staff.</p>
                </div>

            </div>
        </div>
    )
}

export default Surgery
