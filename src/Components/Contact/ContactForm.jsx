import React, { useEffect, useState } from 'react'
import phone from '../../assets/phone.png'
import fax from '../../assets/fax.png'
import email from '../../assets/email.png'
import 'react-phone-number-input/style.css'
import { useForm, Controller } from "react-hook-form";
import PhoneInput from 'react-phone-number-input';
import axios from 'axios'
import * as turf from '@turf/turf';
import countries from '../../countries.json';
const ContactForm = () => {

  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const userPoint = turf.point([longitude, latitude]);
        for (let i = 0; i < countries.features.length; i++) {
          if (turf.booleanPointInPolygon(userPoint, countries.features[i])) {
            setCountry(countries.features[i].properties.ISO_A2);
            return;
          }
        }

        setError("Country not found.");

      }, (err) => {
        setError(`Geolocation error: ${err.message}`);
      });
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const [btnText, setBtnText] = useState("Submit Now")
  const onSubmit = async (data) => {
    try {
      setBtnText("Waiting...")
      await axios.post("https://server.triviummbs.com/api/v1/sendEmailtoUser", data)
      setBtnText("Your request submited")
      setIsLoading(true)
    } catch (error) {
      setIsLoading(false)
      console.error("error while on submit", error);
    }
  };
  return (
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-lg-6 col-12 '>
          <h2 className='clr'>Tell Us Where to Reach You</h2>
          <p className='mb-0'>A member of our team will get back to you within 12 hours.</p>
          <p>For immediate service, give us a call at 281-904-9237.</p>
          <form className='' onSubmit={handleSubmit(onSubmit)}>
            <div className='demo_box2 justify-content-between d-lg-flex d-block w-100 '>
              <div className='w-lg-50 w-100'>
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  {...register("name", { required: true })}
                />
                {errors.name && <span className='text-danger'>Name is required</span>}
              </div>
              <div className='w-lg-50 w-100 ms-lg-5 ms-0'>
                <label for="exampleInputEmail1" class="form-label">
                  Business Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  {...register("businessName", { required: true })}
                />
                {errors.businessName && <span className='text-danger'>Business Name is required</span>}
              </div>
            </div>
            <div className='demo_box2 mt-3 justify-content-around d-lg-block  d-block'>
              <div className=''>
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" aria-describedby="emailHelp"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format"
                    }
                  })}
                />
                {errors.email && <span className='text-danger' role="alert">{errors.email.message}</span>}
              </div>
              <div className=''>
                <label for="exampleInputEmail1" class="form-label">
                  Phone</label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{ required: 'Phone number is required' }}
                  render={({ field }) => <PhoneInput
                    class="form-control "
                    defaultCountry={country ? country : "US"}
                    international
                    countryCallingCodeEditable={false}
                    {...field}
                  />}
                />

                {errors.phoneNumber && <span className='text-danger'>{errors.phoneNumber.message}</span>}
              </div>
            </div>
            <div class="mb-3 demo_box2 mt-3 justify-content-around px-lg-0 px-0">
              <label for="exampleFormControlTextarea1" class="form-label">Your Message
              </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && <span className='text-danger'>Description is required</span>}
            </div>
            <div className='text-center'>

              <button className='btn btn-primary w-100 p-2 text-white px-4' disabled={isLoading} type='submit'>{btnText}</button>
            </div>
          </form>

        </div>
        <div className='col-lg-6 col-12'>
          <h2 className='clr'>Business Address</h2>
          {/* <h2>30 N Gould St Ste R Sheridan, WY 82801</h2> */}
          <h2>L10707 corporate drive suit 250-122, Stafford 77477,Texas</h2>
          
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3468.0154618713077!2d-95.59490232446194!3d29.632294175133772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sL10707%20corporate%20drive%20suit%20250-122%2C%20Stafford%2077477%2CTexas!5e0!3m2!1sen!2s!4v1732538384870!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Embedded Content"
            ></iframe>

          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-lg-12 d-lg-flex d-block gap-3'>
          <div className='col-lg-3 revenue_box text-center'>
            <img src={phone} alt="" className='img-fluid mb-3' />
            <p className='text-center'>PHONE</p>
            {/* <p className='text-center'>307-316-The sure ways solution</p> */}
            <p className='text-center'>281-904-9237</p>

          </div>
          <div className='col-lg-3 revenue_box text-center'>
            <img src={fax} alt="" className='img-fluid mb-3' />
            <p className='text-center'>FAX</p>
            <p className='text-center'>307-288-0381</p>

          </div>
          <div className='col-lg-3 revenue_box text-center'>
            <img src={email} alt="" className='img-fluid mb-3' />
            <p className='text-center'>FOR SALES</p>
            <p className='text-center'>sales@thesurewayssolutions.com</p>

          </div>
          <div className='col-lg-3 revenue_box text-center'>
            <img src={email} alt="" className='img-fluid mb-3' />
            <p className='text-center'>FOR INFO</p>
            <p className='text-center'>info@thesurewayssolutions.com</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
