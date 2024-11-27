import React, { useEffect } from 'react'
import lab1 from '../../assets/lab1.png'
import lab2 from '../../assets/lab2.png'
import lab3 from '../../assets/lab3.png'
import lab4 from '../../assets/lab4.png'
import lab5 from '../../assets/lab5.png'
import hospital2 from '../../assets/hospital2.webp'
// import './recovery.css'
import recovery2 from '../../assets/recovery1.png'
import recovery4 from '../../assets/recovery4.png'
import recovery3 from '../../assets/recovery3.webp'
import recovery5 from '../../assets/recovery5.png'
import recoveryicon from '../../assets/recoveryicon.webp'
import { NavLink } from 'react-router-dom'
const Laboratory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div >
      <div className='diff_bg'>
        <div className='container'>
          <div className='row pt-5'>
            <h1 className='text-center'>The sure ways solutions’s Laboratory Billing Services</h1>
            <p className='text-center'>The sure ways solutions’s lab billing services cover all aspects of medical revenue cycle management (RCM), from payer credentialing to old AR collection. Laboratory medical billing services are available as a standalone offering or in a completely customizable package that may include insurance verification, patient billing and old AR collections, medical coding and billing software, and more.</p>
          </div>
        </div>
        <div className='container'>
          <div className='row pt-4'>
            <div className='col-lg-12 d-lg-flex justify-content-center d-block gap-2'>
              <NavLink to="/laboratory/census">
              <div className='col-lg-12 height  col-12 revenue_box p-3 text-center'>
              
              <img src={lab1} alt="" />
              <h6 className=' '>Order and <br /> Demographic <br /> Management</h6>
            </div>
              </NavLink>
        <NavLink to="/sepcial/toxicology">
        <div className='col-lg-12 height col-12 revenue_box text-center'>
                <img src={lab2} alt="" />

                <h5 className=''>Toxicology</h5>
              </div>
        </NavLink>
              <NavLink to="/sepcial/molecularlab">
              <div className='col-lg-12 height col-12 revenue_box text-center'>
                <img src={lab3} alt="" />

                <h5 className=''>Molecular</h5>
              </div>
              </NavLink>
              <NavLink to="/sepcial/clinical">
              <div className='col-lg-12 height  col-12 revenue_box text-center'>
                <img src={lab4} alt="" />
                <h5 className=''>Clinical</h5>
              </div>
              </NavLink>
              <NavLink to="/sepcial/pathology">
              <div className='col-lg-12 height col-12 revenue_box text-center'>
                <img src={lab5} alt="" />
                <h5 className=''>Pathology</h5>
              </div>
              </NavLink>
             
            
            
              
            </div>

          </div>
          <div className='container pt-5'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-12 '>
                <h2>Comprehensive Laboratory Billing Solutions</h2>
                <p>Unlike many medical billing companies that only service high-ticket providers, The sure ways solutions’s innovative approach works perfectly for lab billing solutions where a high volume of low-dollar claims need to be processed. The efficiency of our system allows us to quickly scrub and file hundreds of claims, typically within 48 hours, and includes a manager assigned to each client who will track all claims, making sure each one gets reimbursed.
                </p>
              </div>
              <div className='col-lg-6 col-12'>
                <img src={hospital2} alt="" className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>

        <div className='bg_recover text-center p-5'>
          <h3 className='text-white'>LAB MEDICAL BILLING SERVICES FOR MAXIMUM REIMBURSEMENT</h3>
          <p className='text-white text-center'>The sure ways solutions’s expert billing for medical laboratory services includes scrubbing and submitting claims within a few days, then tracking all claims until they are paid, resulting in greatly increased revenue.</p>
          <div className='d-flex justify-content-center text-center gap-3'>
          <NavLink to="/contact" className="ms-0">
          <button className='btn btn_demo'>Schedule Demo</button>
          </NavLink>
           
          </div>
        </div>
        <div className='container pt-5'>

          <div className='row mb-4'>
            <div className='col-lg-6 col-12'>
              <h3>EHR/EMR Integration</h3>
              <p> In order to avoid claim denials due to coding errors, software must be updated frequently—however, the cost of maintaining this kind of an information system can be prohibitive for labs. One of the greatest benefits of working with an independent laboratory billing services & solutions company is that you no longer have to worry about keeping up with coding changes and payer requirements.

                Our software can be integrated with your existing practice management, EHR and EMR programs, or it can be used alone to encompass all aspects of patient data and revenue management.</p>
            </div>
            <div className='col-lg-6 col-12 text-center'>
              <img src={recovery2} alt="" className='mb-4' />
            </div>
          </div>
        </div>
        <div className='diff_bg'>
          <div className='container pt-5'>
            <div className='row'>
              <div className='col-lg-6 col-12 text-center'>
                <img src={recovery3} alt="" className='' />
              </div>
              <div className='col-lg-6 col-12'>
                <h3>Always Up to Date</h3>
                <p>The coding and billing teams at The sure ways solutions are highly trained and experienced, but ongoing training is part of our business model, to keep everyone up to date on code changes and new payer requirements. A final step in our claims management process that helps us really stand out is tracking down the source of the error that caused the rejection or denial, and re-training the responsible party to make sure errors are not repeated. So, our lab billing solutions can optimize your billing process substantially.</p>
              </div>

            </div>
          </div>
        </div>
        <div className='container pt-5'>
          <div className='row'>

            <div className='col-lg-6 col-12'>
              <h3>Detailed and Transparent Reporting</h3>
              <p>
                With The sure ways solutions providing your laboratory medical billing solutions, you are relieved of the time-consuming and often tedious work, but will still know exactly what’s going on with your revenue. Our reports are presented regularly, and are designed to keep you abreast of several key performance indicators (KPIs). You will see how long it is taking to get paid and how the accounts-receivable balance is doing relative to the value of services provided, for example. You will see that you are getting paid faster and the proportion of unpaid bills gets smaller after working with us.
              </p>
            </div>
            <div className='col-lg-6 col-12 text-center'>
              <img src={recovery4} alt="" className='mb-4' />
            </div>

          </div>
        </div>
        <div className='diff_bg'>
          <div className='container pt-5'>
            <div className='row'>
              <div className='col-lg-6 col-12 text-center'>
                <img src={recovery5} alt="" className='' />
              </div>
              <div className='col-lg-6 col-12'>
                <h3>Risk Free Partnership</h3>
                <p>Our innovative approach of medical billing for laboratories is so successful that we offer a guarantee of at least a 10% revenue increase. And unlike some other laboratory billing companies, there are no hidden fees. No startup charges or setup fees will be added to your account balance.
                  When you outsource laboratory medical billing to The sure ways solutions, you are working with a trusted partner whose focus is solely on ensuring your success.</p>
              </div>

            </div>
          </div>
        </div>
        <div className='container pt-5'>
          <h2 className='clr text-center'>We offer complete and customized billing and AR management services to meet your needs.
          </h2>
          {/* <p className=' text-center'>A tremendous amount of revenue is lost every year due to unpaid claims not being managed properly. We have a dedicated AR recovery team that is extremely successful at getting reimbursements for what others consider “uncollectible.” It is well known in the collections industry that the longer a bill goes unpaid, the less likely it is to be paid—but rather than giving up on old AR recovery & bills. Our account receivables services team takes that as our cue to take immediate action towards identifying and investigating every unpaid claim. Few medical AR billing services are willing to take on aging AR, or if they do, they want a high fee. Our system streamlines the process, allowing us to be efficient enough to work profitably on old AR Recoveries and low-value claims. These are some of the features of our AR recovery system.</p> */}
          <div className='row pt-4 mb-3'>
            <div className='col-lg-12 d-lg-flex d-block gap-3'>

              <div className='col-lg-3 col-12 '>
                {/* <img src={recoveryicon} alt="" className='text-center justify-content-center ms-lg-5 ms-0' /> */}
                <h5 className='text-center pt-3'>
                  Affordable Rate</h5>
                <p className='text-center pt-1'>We will provide you with physician practice management services and modern medical software at a very affordable rate.</p>
              </div>
              <div className='col-lg-3 col-12 '>
                {/* <img src={recoveryicon} alt="" className='text-center justify-content-center ms-lg-5 ms-0' /> */}
                <h5 className='text-center pt-3'>
                  Runs Smoothly</h5>
                <p className='text-center pt-1'>We assign a The sure ways solutions Regional Manager to your office to ensure that everything runs smoothly.</p>
              </div>
              <div className='col-lg-3 col-12 '>
                {/* <img src={recoveryicon} alt="" className='text-center justify-content-center ms-lg-5 ms-0' /> */}
                <h5 className='text-center pt-3'>
                  HR Services</h5>
                <p className='text-center pt-1'>The The sure ways solutions process can also work with payroll, coordinate benefits and provide your office with human resource services.</p>
              </div>
              <div className='col-lg-3 col-12 '>
                {/* <img src={recoveryicon} alt="" className='text-center justify-content-center ms-lg-5 ms-0' /> */}
                <h5 className='text-center pt-3'>
                  Accounting Services</h5>
                <p className='text-center pt-1'>We will process and collect your accounts receivable, and offer full accounting services.</p>
              </div>
            </div>

          </div>

        </div>
        <div className='bg_reco p-5'>
          <div className=' text-white'>
            <h5 className='text-white text-center'>The Lab Business Isn’t Getting Any Easier</h5>
            <p className='text-center'>Leverage The sure ways solutions’s lab expertise to improve efficiency and increase revenue.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Laboratory
