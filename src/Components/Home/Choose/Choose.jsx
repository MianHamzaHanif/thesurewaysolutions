import React from 'react'
import plus from '../../../assets/plus.png'
import tool from '../../../assets/tool.png'
import mso from '../../../assets/mso.png'
import {GiMedicalPackAlt} from 'react-icons/gi'
import {FaStethoscope} from 'react-icons/fa'
import {RiSecurePaymentFill} from 'react-icons/ri'
import './Choose.css'
const Choose = () => {
  return (
    <div>
      <div className='container mb-5'>
        <div className='row pt-5 justify-content-between'>
            <div className='col-lg-6 bg_choose'>
                  
                  {/* <div className='box d-flex'>
                  <GiMedicalPackAlt className="icon_height"/>
                  <div className='d-block ms-3'>
                  <h5 className='mb-0'>Medical Billing</h5>
<p className='mb-0'>35-45 specialities</p>
                  </div>

                  </div>
                  <div className='box d-flex'>
                  <FaStethoscope className="icon_height"/>
                  <div className='d-block ms-3'>
                  <h5 className='mb-0'>Practice Management</h5>
                    <p className='mb-0'>Support all segment of RCM</p>
                  </div>
                  
                    </div> */}

            </div>
            <div className='col-lg-6'>
                {/* <p className='mb-0'>Why Choose Us?</p> */}
                <h2 className='clr'>Using technology and unique solutions, the most complete revenue cycle management solutions are available for medical offices</h2>
                <p className=''>The sure ways solutions can increase your profitability while giving you more time to devote to your patients. Your practice management will improve as a result of the high degree of efficacy you can accomplish with the help of our creative and dynamic medical billing solution. Because we put more time and effort into the initial claim process to minimize expensive time delays and denials on the back end, you will notice a substantial shift in the speed of your revenue cycle. To anticipate and minimize coding and billing problems while optimizing output, we also make use of cutting-edge technology and knowledgeable staff. Our investment in the preliminary claim procedure is beneficial.


</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
