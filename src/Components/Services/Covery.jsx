import React, { useEffect } from 'react'
import hospital2 from '../../assets/hospital2.webp'
import hospitalicon from '../../assets/hospitalicon.webp'
// import './recovery.css'
import recovery2 from '../../assets/recovery1.png'
import recovery4 from '../../assets/recovery4.png'
import recovery3 from '../../assets/recovery3.webp'
import recovery5 from '../../assets/recovery5.png'
import recoveryicon from '../../assets/recoveryicon.webp'
import covery from '../../assets/covery.webp'
import covery1 from '../../assets/covery1.webp'
import covery2 from '../../assets/covery2.png'
import covery3 from '../../assets/covery3.png'
const Covery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div >
      <div className='bgabou'>
        <div className='container pt-5'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-12 '>
              <h2>Services for Coverage Discovery</h2>
              <p>For The sure ways solution We'll lessen your revenue loss. <br />
Simply said, patients' lack of insurance or inadequate insurance is the main cause of the lost income from uncompensated treatment. Due to negligence or a personnel shortage, another portion is simply never billed internally by the medical billing department. However, it's thought that up to 10% of self-pay accounts that are written off are in fact protected by chargeable insurance or a government health care program. This constitutes a large portion of the providers' prior-to-now challenging-to-recover income.

              </p>
              {/* <button className='btn btn_demo'>Free AR Analysis</button> */}
            </div>
            <div className='col-lg-6 col-12'>
              <img src={covery} alt="" className='img-fluid mb-5'/>
            </div>
          </div>
        </div>
      </div>


      <div className='container pt-5'>

        <div className='row align-items-center'>
          <div className='col-lg-6 col-12'>
            <h3>Services for Coverage Discovery Increased Income</h3>
            <p> Hundreds of billions of dollars have been lost in income as a result of uncompensated care. The Coverage Discovery team at The sure ways solutions searches for insurance that patients might not even be aware they have and secures all available reimbursements for our customers.</p>
          </div>
          <div className='col-lg-6 col-12 text-center'>
            <img src={covery1} alt="" className='mb-4 img-fluid' style={{height:"300px"}}/>
          </div>
        </div>
      </div>
      <div className='diff_bg'>
        <div className='container pt-5'>
          <div className='row'>
            <div className='col-lg-6 col-12 text-center'>
              <img src={covery2} alt="" className='img-fluid mb-5' />
            </div>
            <div className='col-lg-6 col-12'>
              <h3>Why Did The Revenue Get Lost?</h3>
              <p>All of this potential growth in income comes from insurance that patients might not even be aware they have. Young adults might be unaware that they are still protected by a parent's insurance policy. Another very typical circumstance is when a person is unaware that they are protected by a plan set up by their spouse.
They frequently believe you will find out about a secondary coverage if you check for their primary coverage if they are aware of one. The complexity of Medicaid and Medicare, with all of its components, is difficult enough for specialists to handle. It seems sense that beneficiaries, who are frequently old or incapacitated, would expect your medical billing staff already has access to the information required to determine what all of their coverage entails, rather than doing the necessary investigation to sort it all out.


              </p>
            </div>

          </div>
        </div>
      </div>
      <div className='container pt-5'>
        <div className='row'>

          <div className='col-lg-6 col-12'>
            <h3>How the Coverage Discovery Service at The sure ways solutions Operates</h3>
            <p>It is obvious that it would be difficult to individually investigate every potential payer for every single patient. Software tools made especially for the job are used by Coverage Discovery. When a patient states they are self-paying, we may help both the patient and the physician if there is any amount of coverage by automatically searching for it. The resources include sophisticated search functions, automated claim cleansing, a sizable database, and algorithms made to weed out false-positive findings and inaccurate conclusions.
            </p>
          </div>
          <div className='col-lg-6 col-12 text-center'>
            <img src={covery3} alt="" className='mb-5 img-fluid' />
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
              <h3>Advantages of Coverage Discovery</h3>
              <p>•	Recognizes all layers of protection to increase reimbursement <br />
•	Reduces the amount of accounts written off or sent to collections <span className='ms-2'>Decreases the cost of collecting overdue bills </span> <br />
•	Decreases total bad debt<br />
•	Improves patient contentment<br />
</p>
            </div>

          </div>
        </div>
      </div>
      <div className='container pt-5'>
        <h2 className='clr '>Enhance front-end Verification of Eligibility and Benefits
        </h2>
        <p className=''>
        Verifying eligibility kicks off the Coverage Discovery process at the beginning of the medical revenue cycle. Before patients are ever seen by the physician, over one-third of claim denials and rejections are the result of upfront mistakes. Processes for registration and verification can be considerably improved for increased income. The following are just a few ways that Coverage Discovery helps the front-office procedure:<br />
        •	Simplifies interactions between staff and patients <br />
•	Front-end collections are up <br />
•	Ensures accurate code matching <br />
•	Reduces rejects and denials by guiding staff <br />


        </p>
        <div className='row pt-4'>
          <div className='col-lg-12 d-lg-flex d-block gap-3'>

            <div className='col-lg-12 col-12 bg-transparent revenue_box'>
              <img src={recoveryicon} alt="" />
              <h2 >

              Reduce write-offs and bad debt</h2>
              <p>There will always be patients who are unable to pay the entire cost of medical care, but by giving accurate information to patients, disclosing prices up front, and charging all accountable payers, you may recover more of your earned income. The inability to determine who should be charged for services is no longer a valid excuse.</p>
            </div>
            {/* <div className='col-lg-6 col-12 revenue_box'>
              <img src={recoveryicon} alt="" />
              <h2>
                Qualified Billing Staff</h2>
              <p>Billing staff benefit from having the correct insurer/payer information. Code matching helps to ensure the claims are approved when they are submitted. It also makes it easier to get them filled out since the appropriate codes have already been identified.</p>
            </div> */}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Covery
