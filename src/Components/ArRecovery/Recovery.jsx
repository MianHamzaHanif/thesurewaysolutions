import React, { useEffect } from 'react'
import ar from '../../assets/ar.webp'
import hospitalicon from '../../assets/hospitalicon.webp'
import './recovery.css'
import recovery2 from '../../assets/recovery1.png'
import recovery4 from '../../assets/recovery4.png'
import recovery3 from '../../assets/recovery3.webp'
import recovery5 from '../../assets/recovery5.png'
import recoveryicon from '../../assets/recoveryicon.webp'
import { NavLink } from 'react-router-dom'
const Recovery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div >
      <div className='diff_bg'>
        <div className='container pt-5'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-12 '>
              <h2>The AR Recovery Services of The sure ways solutions Increase Revenue</h2>
              <p>With its wide variety of AR management services, The sure ways solutions helps clients recover uncollected money from past-due accounts with an aging of more than 120 days. Even from accounts that were once believed to be lost causes, our technology has increased recovery rates dramatically.
                The sure ways solutions provides AR medical billing recovery services as a stand-alone alternative, in contrast to the majority of medical billing businesses that only provide AR recovery solutions as a component of a revenue cycle management package. We don't think that healthcare receivable recovery solutions should be generic; instead, they should be tailored to your company's particular needs.


              </p>
              {/* <button className='btn btn_demo'>Free AR Analysis</button> */}
            </div>
            <div className='col-lg-6 text-center col-12'>
              <img src={ar} alt="" className='img-fluid mb-5'/>
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
      <div className='bg_recover text-center p-5'>
        <h1 className='text-white'>SYSTEMATIC REVENUE GROWTH WITH SUCCESSFUL CLAIMS MANAGEMENT</h1>
        <p className='text-white text-center'>The cutting-edge technology at The sure ways solutions follows each claim all the way through, <br /> ensuring that our clients receive the money they are due.</p>
        <div className='d-flex justify-content-center text-center gap-3'>
         <NavLink to="/contact">

         <button className='btn btn_demo'>Schedule Demo</button>
         </NavLink>
        </div>
      </div>
      <div className='container pt-5'>
        <h2 className='clr text-center'>The 4-Piece The sure ways solutions Recovery Plan</h2>
        <p className='text-center '>We have created a management plan for aging AR accounts throughout the years. Our previous AR recovery solution uses a simplified method that is quick and efficient.</p>
        <div className='row mt-5 mb-5'>
          <div className='col-lg-6 col-12'>
            <h3>Systematic Assessment</h3>
            <p> The initial step when our AR team provides account recovery solutions to a new customer is a careful examination of every outstanding claim. We look for every one that could be recoverable and start working on it, even if there may be some that have expired or are not collectible for some other reason. The "low hanging fruit" is not everything that we are searching for in this process. We examine each claim that could still be paid because we are aware of how quickly little sums can stack up for our customers while many medical billing agencies only seek for huge dollar claims in aging AR.</p>
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
              <h3>Prioritization</h3>
              <p>To make sure that no claims expire before we get a chance to process them, our staff evaluates older unpaid claims with a high priority. In order to help you recover the most money possible, we remain ahead of the payers' needs by using cutting-edge analytical technologies to reduce medical account receivables. You can concentrate on running your practice knowing that we are taking care of your bottom line since we constantly follow up with each payer to collect your past-due payments.</p>
            </div>

          </div>
        </div>
      </div>
      <div className='container pt-5'>
        <div className='row'>

          <div className='col-lg-6 col-12 mb-5'>
            <h3>Correction and Resubmission of Claims</h3>
            <p>No claim is ever turned down, refused, or paid insufficiently by our committed taskforce because of a lack of follow-up. We appeal each of those claims when the necessary modifications or clarifications have been provided in order for the insurance company or government payer to reevaluate the payment. We keep track of your claim rejections and denials in order to spot any recurrent issues and permanently fix them in your revenue cycle management system.

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
            <div className='col-lg-6 mb-5 col-12 text-center'>
              <img src={recovery5} alt="" className='' />
            </div>
            <div className='col-lg-6 col-12'>
              <h3>Patient Interaction</h3>
              <p>If the AR team determines that the patient should be responsible for paying the remaining debt, we produce and send them an easy-to-understand report. We will also manage the direct communications with your patients if you would like. You don't need to be concerned about communicating the incorrect message to your patients because we are not a collection agency. We make sure everything is simple to grasp because we've discovered that patients are far more likely to pay their bills if they comprehend the charges and concur with the balance owed. If you like, we'll even take their calls and respond to their inquiries.</p>
            </div>

          </div>
        </div>
      </div>
      <div className='container pt-5'>
        <h2 className='clr text-center'>AR Recovery is one of our areas of expertise
        </h2>
        <p className='text-center'>Every year, unpaid claims that are not adequately managed result in significant income losses. We have a committed team that works diligently to recover uncollectible accounts receivable, and they are quite effective at doing so. The collections business is well aware that the longer a bill remains unpaid, the less likely it is to be paid; but, instead of letting up on old AR recovery & invoices, pursue them. That serves as a signal to our team of account receivables services to begin looking for and looking into each overdue claim right away. Only a small number of medical AR billing businesses are willing to handle aged AR, and those that do want a premium cost. Our solution simplifies the procedure and makes us productive enough to handle low-value claims and old AR Recoveries profitably. These are a few of the characteristics of our method for AR recovery.</p>
        <div className='row pt-4'>
          <div className='col-lg-12 d-lg-flex d-block gap-3'>

            <div className='col-lg-4 col-12 revenue_box'>
              {/* <img src={recoveryicon} alt="" /> */}
              <h2>
                We go after every claim.</h2>
              <p>While many billing businesses steer clear of minor claims recovery and those with a poor chance of getting paid, The sure ways solutions does not. Due to the effectiveness of our system, we can obtain payment for each claim, hence lowering medical account receivables.</p>
            </div>
            <div className='col-lg-4 col-12 revenue_box'>
              {/* <img src={recoveryicon} alt="" /> */}
              <h2>
                Setting Priorities for Maximum Recovery</h2>
              <p>We give claims top priority to prevent premature expiration and use the most effective method of medical recovery services to obtain the largest recovery amount.</p>
            </div>
            <div className='col-lg-4 col-12 revenue_box'>
              {/* <img src={recoveryicon} alt="" /> */}
              <h2>
                Team dedicated to AR Recovery</h2>
              <p>When we agree to help with AR recovery, we appoint a specialized team of skilled medical billers to concentrate on looking into each claim in your AR records.</p>
            </div>
          </div>

        </div>
        <div className='row pt-4'>
          <div className='col-lg-12 d-lg-flex d-block gap-3'>

            <div className='col-lg-4 col-12 revenue_box'>
              {/* <img src={recoveryicon} alt="" /> */}
              <h2>
                Pay Only If Reimbursement Is Successful</h2>
              <p>There is no chance that you will lose money on old AR, even though it is a lot of effort for us to comb through all of your unpaid claims. Only a small portion of the money we collect in fees is charged. There is no danger to you since if we are unsuccessful in getting payment for a claim, you don't have to pay us.</p>
            </div>
            <div className='col-lg-4 col-12 revenue_box'>
              {/* <img src={recoveryicon} alt="" /> */}
              <h2>
                Recoveries Ratios Over 90%</h2>
              <p>Over 90% of claims dating back as long as a year have regularly been recovered by our highly skilled staff of AR recovery services. Any type of medical firm may readily benefit financially from generating that kind of revenue.</p>
            </div>
            <div className='col-lg-4 col-12 revenue_box'>
              {/* <img src={recoveryicon} alt="" /> */}
              <h2>
                Rejections and Denials of Appeals</h2>
              <p>The majority of claim rejections and denials are the result of mistakes or omissions that our medical recovery services may simply fix. A high success rate is also achieved while identifying and fixing more complicated problems.

                Because we know how to obtain results, The sure ways solutions is a recognized industry leader and name in medical accounts receivable collections. We stand out for our expertise in sophisticated medical coding and AR management services. But what makes us stand out is the depth of our expertise. We specialize in medical billing for doctors, laboratories, radiology & imaging institutes, and hospitals, and we effectively serve healthcare institutions of all shapes and sizes.
                We are aware that when your financial line is on the line, it can be challenging to maintain a singular focus on patient care. Perhaps it's time to engage the help of a seasoned medical billing business like The sure ways solutions if you're using important time and energy attempting to diagnose finances.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className='bg_reco p-5 mt-5'>
        <div className='text-start text-white'>
          <p className=''>The sure ways solutions is an industry leader and trusted name in medical accounts receivable collections because we know how to get results. Our mastery of complex medical coding and AR management services sets us apart. But it’s our breadth of knowledge that allows us to shine. Our medical billing company successfully serves healthcare facilities of all types and sizes, and we specialize in medical billing for physicians, laboratories, radiology & imaging centers, and hospitals.
            We know it’s difficult to remain entirely focused on patient care when you’re worried about your bottom line. If you’re spending valuable time and energy trying to diagnose finances, then perhaps it’s time to enlist the aid of a professional medical billing company like The sure ways solutions.</p>
        </div>

      </div>
    </div>
  )
}

export default Recovery
