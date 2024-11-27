import React, { useEffect, useState } from 'react'
import './demo.css'
import demo from '../../../assets/demo.png'
import { BsGraphDown, BsGraphUpArrow } from 'react-icons/bs'
import { FaRegMoneyBill1 } from 'react-icons/fa6'
import 'react-phone-number-input/style.css'
import { useForm, Controller } from "react-hook-form";
import PhoneInput from 'react-phone-number-input';
import axios from 'axios'
import * as turf from '@turf/turf';
import countries from '../../../countries.json';
const Demo = () => {
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
        <div className='demo p-lg-5 p-2'>
            <div className='container '>
                <div className='row justify-content-between'>
                    <div className='col-lg-6 col-12'>
                        <h2 className='clr'>With The sure ways solutions, you get a host of benefits</h2>
                        <div className='demo_box d-flex'>
                            {/* <img src={demo} alt="" className='choose_icons'/> */}
                            <BsGraphDown className='icon_height' />
                            <div className='d-block ms-3'>
                                <h5>Reducing costs:
                                </h5>
                                <p>You will save 40% to 50% by using The sure ways solutions and we will only charge you a small percentage.</p>
                            </div>

                        </div>
                        <div className='demo_box d-flex'>
                            {/* <img src={demo} alt="" className='choose_icons'/> */}
                            <BsGraphUpArrow className='icon_height2' />
                            <div className='d-block ms-3'>
                                <h5>Revenue growth:
                                </h5>
                                <p>Through regular audits and reviews of billing processes and claim submissions, The sure ways solution can help maintain revenue integrity by reducing the number of claims rejected or denied.</p>
                            </div>
                        </div>
                        <div className='demo_box d-flex'>
                            {/* <img src={demo} alt="" className='choose_icons'/> */}
                            <FaRegMoneyBill1 className="icon_height2" />
                            <div className='d-block ms-3'>
                                <h5>Faster payment:
                                </h5>
                                <p>In order to ensure that claims are submitted on time, we provide dynamic billing services, as well as ERAs and EFTs so that payments can be received sooner.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-6 col-12 px-lg-4 px-0'>
                        <h2 className='clr px-lg-4 ms-lg-1 ms-0 px-0'>Schedule a Demo</h2>
                        <p className='mb-2 px-lg-4 ms-lg-1 ms-0 px-0 '>A member of our team will get back to you within <strong>24/48 hours</strong> .</p>
                        <p className='mb-0 px-lg-4 ms-lg-1 ms-0 px-0 font'>For immediate service, give us a call at <strong>307-316-90</strong>

                        </p>
                        <form className='bg_demo mt-3 ' onSubmit={handleSubmit(onSubmit)}>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <label for="exampleInputEmail1" class="form-label text-dark">Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && <span className='text-danger'>Name is required</span>}
                                </div>
                                <div className='col-lg-6'>
                                    <label for="exampleInputEmail1" class="form-label text-dark">
                                        Business Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        {...register("businessName", { required: true })}
                                    />
                                    {errors.businessName && <span className='text-danger'>Business Name is required</span>}
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-lg-6'>
                                    <label for="exampleInputEmail1" class="form-label text-dark">Email</label>
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
                                <div className='col-lg-6'>
                                    <label for="exampleInputEmail1" class="form-label text-dark">
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
                            <div class="mb-3 demo_box2 mt-3 justify-content-around px-0">
                                <label for="exampleFormControlTextarea1" class="form-label text-dark">Your Message
                                </label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    {...register("description", { required: true })}
                                ></textarea>
                                {errors.description && <span className='text-danger'>Description is required</span>}
                            </div>
                            <div className='text-center'>

                                <button className='btn btn_demo w-100 p-2 text-white'>Submit Now</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Demo
