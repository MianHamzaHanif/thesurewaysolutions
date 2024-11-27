import React, { useEffect } from 'react'
import hospital2 from '../../assets/hospital2.webp'
import hospitalicon from '../../assets/hospitalicon.webp'
// import './recovery.css'
import recovery2 from '../../assets/recovery1.png'
import recovery4 from '../../assets/recovery4.png'
import recovery3 from '../../assets/recovery3.webp'
import recovery5 from '../../assets/recovery5.png'
import recoveryicon from '../../assets/recoveryicon.webp'
import workforce from '../../assets/workforce.png'
import workforce1 from '../../assets/workforce1.webp'
const Workforce = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div >
      <div className='diff_bg'>
        <div className='container pt-5'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-12 '>
              <h2>WANT A SIMPLE SOLUTION TO YOUR STAFFING SHORTAGE? The sure ways solutions FORCE</h2>
              <p>You are not alone in your personnel shortage! Medical offices across the country are having difficulty finding sufficient personnel to keep their businesses functioning. The sure ways solutions Force is our team of remote office staff who fill in the gaps. We provide an extension of your own staff and can take care of both front and back office, including scheduling, insurance verification, updating electronic medical records, credentialing, and much more.
              </p>
              {/* <button className='btn btn_demo'>Free AR Analysis</button> */}
            </div>
            <div className='col-lg-6 text-center col-12'>
              <img src={workforce1} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='container'>
        <div className='row pt-4'>
          <div className='col-lg-12 d-lg-flex d-block gap-2'>
            <div className='col-lg-3 col-12  text-center'>
              <img src={hospitalicon} alt="" />
              <h5 className='mt-2 text-center'>Reduce Overhead by 50% or More</h5>
              <p className='clr text-center'>Outsourcing business operations to The sure ways solutions gets immediate coverage and can easily cut staffing overhead costs by at least half.</p>
            </div>
            <div className='col-lg-3 col-12  text-center'>
              <img src={hospitalicon} alt="" />
              <h5 className='mt-2 text-center'>Streamline Critical Processes</h5>
              <p className='clr text-center'>From patient scheduling at the start of the cycle to collecting payments at the end, The sure ways solutions staff will take care of every step.</p>
            </div>
            <div className='col-lg-3 col-12  text-center'>
              <img src={hospitalicon} alt="" />
              <h5 className='mt-2 text-center'>Increase Profitability and Growth Potential</h5>
              <p className='clr text-center'>Our professional team works with your existing staff to ensure your business runs smoothly and you get paid for your services. Profitability and growth naturally follow.</p>
            </div>
            <div className='col-lg-3 col-12  text-center'>
              <img src={hospitalicon} alt="" />
              <h5 className='mt-2 text-center'>Improve Turnaround Time</h5>
              <p className='clr text-center'>The sure ways solutions Force is standing by to take on any aspect of operating a medical business as needed. Our team is scheduled to make sure we get everything done as efficiently as possible with minimal lag time.</p>
            </div>
          </div>
        </div>

      </div> */}




      <div className=''>
        <div className='container pt-5'>
          <div className='row'>
            <div className='col-lg-6 col-12 text-center'>
              <img src={workforce} alt="" className='' />
            </div>
            <div className='col-lg-6 col-12'>
              <h3>Find Out How Partnership with The sure ways solutions Can Transform Your Revenue Cycle</h3>
              <p>The sure ways solutions’s billing team routinely increases revenue for our clients by implementing our proven system of claim management. The sure ways solutions Force is here to raise the bar on the entire revenue cycle, taking on all the routine office tasks so you are free to focus on growing your business.</p>
            </div>

          </div>
        </div>
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

export default Workforce
