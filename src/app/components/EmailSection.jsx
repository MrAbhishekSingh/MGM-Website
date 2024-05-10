"use client";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className=" grid md:grid-cols-2 my-12 md:my-12  gap-4 relative">
      <div className="  m-auto " style={{ minWidth: "40% ", maxWidth: "100%" }}>
        <span class="font-weight-600 text-dark my-2 responsive-heading">
          Get in touch
        </span>
        {emailSubmitted ? (
          <p className="text-dark-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="form-control border border-dark rounded-lg mb-3"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                name="email"
                type="email"
                id="email"
                required
                className="form-control border border-dark rounded-lg mb-3"
                placeholder="Your email"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                id="message"
                className="form-control border border-dark rounded-lg mb-3"
                placeholder="Message..."
              />
            </div>
            <div className="mb-3 text-start">
              <button
                className="btn font-weight-600 text-white px-4 py-2"
                style={{ fontSize: '16px', backgroundColor: '#043EA7' }}
              >
                Submit
              </button>
            </div>
          </form>

        )}
      </div>
      <div className="z-1" style={{ minWidth: "60% ", maxWidth: "100%" }}>
        <p className="text-dark mb-4 max-w-md font-inter" style={{ fontSize: "16px", lineHeight: "19.36px", fontWeight: 400 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui earum omnis quis saepe vel quidem soluta
        </p>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="position-relative overflow-hidden" style={{ borderRadius: "10px" }}>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54872.060424581105!2d76.72951406862552!3d30.73234772178811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1711638128423!5m2!1sen!2sin"
                    className="embed-responsive-item w-100"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="socials flex flex-col gap-2 p-4">
          <div className="flex flex-row gap-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "24px", color: "#202020" ,fontWeight: 600}}>
            <a href="tel:YOUR_PHONE_NUMBER" style={{ color: "dark" }}>
              <FaPhone />
            </a>
            <span>GitHub, NYC, United States</span>
          </div>

          <div className="flex flex-row gap-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "24px", color: "#202020" ,fontWeight: 600}}>
            <FaMapMarkerAlt style={{ color: "dark" }} />
            <span >
              NYC, United States
            </span>
          </div>
          <div className="flex flex-row gap-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "24px", color: "#202020",fontWeight: 600 }}>
            <FaEnvelope style={{ color: "dark " }} />
            <span >
              Email, NYC, United States
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
