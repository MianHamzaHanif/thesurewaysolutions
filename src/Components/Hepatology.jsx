import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import hospital2 from '../assets/hospital2.webp'
import hospitalicon from '../assets/hospitalicon.webp'
// import './recovery.css'
import recovery2 from '../assets/recovery1.png'
import recovery4 from '../assets/recovery4.png'
import recovery3 from '../assets/recovery3.webp'
import recovery5 from '../assets/recovery5.png'
import data from '../content'
import recoveryicon from '../assets/recoveryicon.webp'
const Hepatology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { title } = useParams();
  let filterContent = data.filter((item) => item.route === title)
  let { bg_image, side_txt, heading, heading_para, section_image, new_section_img, new_section_heading, new_section_heading_para, why_heading, why_para, multiple_heading, multiple_para, mutliple_image, bundled_heading, bundled_para, bundled_image } = filterContent[0]
  console.log("filterContent", filterContent)
  return (
    <div >
      <div className='' style={{
        backgroundImage: `url(${bg_image})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '300px',
      }}>
        <h1 className='text-center pt-5'>
          {side_txt}</h1>
        <div className='container pt-5'>
          <div className='row align-items-center'>
            {/* <div className='col-lg-6 col-12 '>
                    <h2>The sure ways solutions’s AR Recovery Services Maximize Revenue</h2>
                    <p>The sure ways solutions offers a comprehensive range of AR management services, recovering outstanding revenue from old AR accounts that are aging more than 120 days. Our system has been proven to be highly effective at increasing recovery, even from accounts that were thought to be lost causes.

Unlike most medical billing companies, who only offer AR recovery solutions as part of a revenue cycle management package, The sure ways solutions offers AR medical billing recovery services as a standalone option. We don’t believe in a one-size-fits-all approach to healthcare receivable recovery solutions and want to meet the unique needs of your business.

</p>
<button className='btn btn_demo'>Free AR Analysis</button>
                </div>
                <div className='col-lg-6 col-12'>
                    <img src={hospital2} alt="" />
                </div> */}
          </div>
        </div>
      </div>
      <div className='container'>
        {/* <div className='row pt-4'>
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
        </div> */}

      </div>
      {/* <div className='bg_recover text-center p-5'>
        <h1 className='text-white'></h1>
        <p className='text-white'>The sure ways solutions’s innovative system tracks every claim to completion, getting our clients the revenue they deserve.</p>
        <div className='d-flex justify-content-center text-center gap-3'>
          <button className='btn btn_demo'>Click to Call
          </button>
          <button className='btn btn_demo'>Schedule Demo</button>
        </div>
      </div> */}
      <div className='container pt-5'>
        {/* <h2 className='clr text-center'>The sure ways solutions’s 4-Part Strategy for AR Recovery</h2>
        <p className='text-center'>Our strategy for managing aging AR accounts has been developed through years of experience. Our old AR recovery service is a streamlined approach that is both fast and effective.</p> */}
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <h3>{heading}</h3>
            <p>{heading_para}</p>
          </div>
          <div className='col-lg-6 col-12 text-center'>
            <img src={section_image} alt="" className='mb-5' style={{ height: '300px' }} />
          </div>
        </div>
      </div>
      <div className='diff_bg'>
        <div className='container pt-5'>
          <div className='row'>
            <div className='col-lg-6 col-12 text-center'>
              <img src={new_section_img} alt="" className='mb-5' style={{ height: '300px' }} />
            </div>
            <div className='col-lg-6 col-12'>
              <h3>{new_section_heading}</h3>
              <p>{new_section_heading_para}</p>
            </div>

          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-lg-12'>
            <h3 className='text-center'>{why_heading}</h3>
            <p className='text-center'>{why_para}</p>
          </div>
        </div>
      </div>
      <div className='container pt-5'>
        <div className='row'>

          <div className='col-lg-6 col-12'>
            <h3>{multiple_heading}</h3>
            <p>{multiple_para}

            </p>
          </div>
          <div className='col-lg-6 col-12 text-center'>
            <img src={mutliple_image} alt="" className='mb-5' style={{ height: '300px' }} />
          </div>

        </div>
      </div>
      <div className='diff_bg'>
        <div className='container pt-5'>
          <div className='row'>
            <div className='col-lg-6 col-12 text-center'>
              <img src={bundled_image} alt="" className='mb-5' style={{ height: '300px' }} />
            </div>
            <div className='col-lg-6 col-12'>
              <h3>{bundled_heading}</h3>
              <p>{bundled_para}</p>
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

export default Hepatology
