import React,{useEffect} from 'react'
import './about.css'
import about2 from '../../../assets/about2.webp'
import { NavLink } from 'react-router-dom'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
     <div className=''>
 <div className='container'>
      {/* <div className='row w-100 '>
        <div className='col-lg-12 '>
<h1 className='text-white text-center'>REVENUE CYCLE - SERVICES. TECHNOLOGY. </h1>
        </div>
      </div> */}
    </div>
    </div>
    <div className='bgabou'>
    <div className='container '>
        <div className='row align-items-center'>
            <div className='col-lg-8 col-12 pt-5'>
              
<h1 className='clr'> Services, Technology, Revenue Cycle            </h1>
<p className='line'>By offering Revenue Cycle solutions to improve clinical results,  boost financial performance, and streamline operations, The sure ways solutions has been a dependable partner to healthcare organizations  since  2013. Delivering market-leading outcomes requires the application of our revenue cycle experience, technology solutions, automation platform, analytics, and best practices. In a nutshell, we oversee our clients' healthcare operations.</p>
<h1 className='clr'>A dedicated, reliable partner with a mission to improve healthcare outcomes by leveraging knowledge and technology</h1>
<p className='mb-3 line'>We have the trust of more than 150 healthcare organizations, including hospitals, healthcare systems, independent medical practices, and providers of RCM software. With more effective billing, coding, payments, and collections procedures, we lower costs and quicken cash flow. To improve clinical, administrative, and financial processes so that our clients can concentrate on offering timely, high-quality patient care, we use technology and best practices.</p>
<p className='line'>We offer health plans the full range of outsourced services, including provider enrollment and engagement, claims administration, member enrollment and engagement, and provider engagement.</p>
<NavLink to="/contact" className="ms-0">

<button className='btn btn_demo text-white mb-5'>Request a Consultation</button>
</NavLink>
            </div>
            <div className='col-lg-4 col-12'>
                     <img src={about2} alt="" className='img-fluid'/>
            </div>
        </div>
    </div>
    </div>
 
    </>
   
   
  )
}

export default About

