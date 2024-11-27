import React from 'react'
import revenue from '../../../assets/revenue.png'
import {GiHospital} from 'react-icons/gi'
import {FaHospitalUser} from 'react-icons/fa'
import {FaSackDollar} from 'react-icons/fa6'
import {ImLab} from 'react-icons/im'
import {LiaHospitalSolid} from 'react-icons/lia'
import {BsUmbrella} from 'react-icons/bs'
import {TbAmbulance} from 'react-icons/tb'
import {IoBagAddSharp} from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import './revenue.css'
const Revenue = () => {
  return (
    <div className='container'>
        <div className='row mt-4 justify-content-between'>
      <h2 className='mb-3 mt-3'>The sure ways solutions Revenue Cycle Management and Billing Services
</h2>  
                <h5 className='clr'></h5>
                <div className='col-lg-12 d-lg-flex d-block  gap-3 mt-3'>
                <div className='col-lg-3 text-center mb-2 col-12 revenue_box'>
 {/* <img src={revenue} alt="" /> */}
 <NavLink to="hospital" className="ms-0">
 <GiHospital className="icon_height mb-2"/>
 <h5>Hospital Billing <br /> Services</h5>
<p className='text-primary text-center'>More Info</p>
 </NavLink>
 
                </div>
    
                <div className='col-lg-3 mb-2 text-center col-12 revenue_box'>
                <NavLink to="workforce" className="ms-0">
                <FaHospitalUser className="icon_height mb-2"/>
 <h5>Staffing and Workforce</h5>
<p className='text-primary  text-center'>More Info</p>
                  </NavLink>
 
                </div>
                <div className='col-lg-3 text-center mb-2 col-12 revenue_box'>
                <NavLink to="laboratory" className="ms-0">
                <ImLab className="icon_height mb-2"/>
 <h5>Laboratory Billing <br />
Services</h5>
<p className='text-primary  text-center'>More Info</p>
                  </NavLink>
 
                </div>
                <div className='col-lg-3 text-center mb-2 col-12 revenue_box'>
                <NavLink to="imaging" className="ms-0">
                <LiaHospitalSolid className="icon_height mb-2"/>
 <h5>Imaging Center <br />
Billing</h5>
<p className='text-primary  text-center'>More Info</p>
                  </NavLink>
 
                </div>
            </div>
        </div>
     <div className='row'>
     <div className='col-lg-12 d-lg-flex d-block gap-3 mt-lg-3 mt-0'>
                <div className='col-lg-3 text-center mb-2 col-12 revenue_box'>
                <NavLink to="covery" className="ms-0">
                <BsUmbrella className="icon_height mb-2"/>
 <h5>Coverage Discovery</h5>
<p className='text-primary  text-center'>More Info</p>
                  </NavLink>

                </div>
    
                <div className='col-lg-3 text-center mb-2  col-12 revenue_box'>
                <NavLink to="recovery" className="ms-0">
                <FaSackDollar className="icon_height mb-2"/>
 <h5>AR Recovery <br />
Services</h5>
<p className='text-primary  text-center'>More Info</p>
                  </NavLink>

                </div>
                <div className='col-lg-3 text-center mb-2  col-12 revenue_box'>
                <NavLink to="surgery" className="ms-0">
                <TbAmbulance className="icon_height mb-2"/>
 <h5>Ambulatory Surgery <br /> Billing</h5>
<p className='text-primary  text-center'>More Info</p>
                  </NavLink>

                </div>
                <div className='col-lg-3 mb-2 text-center  col-12 revenue_box'>
                <NavLink to="medical" className="ms-0">
                <IoBagAddSharp className="icon_height mb-2"/>
 <h5>Medical Billing
Services</h5>
<p className='text-primary  text-center'>More Info</p>
                  </NavLink>

                </div>
            </div>
            <div className=' text-end pt-3 col-12 mb-3'>
              {/* <NavLink>
              <button className='btn btn_demo text-white'>View All Services</button>
              </NavLink> */}
  
     </div>
     </div>
    
   
    </div>
  )
}

export default Revenue
