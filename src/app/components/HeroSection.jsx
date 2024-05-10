"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

// Import Bootstrap CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const HeroSection = () => {
  return (
    <section className="p-2" style={{backgroundColor:'#fff'}}>
      <div className="container">
        <div className="row">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-12 col-sm-6 d-flex align-items-center justify-content-center text-center text-sm-start"
          >
            <div>
              <h1 className="text-[#043EA7] mb-1  fs-lg-6 fw-bold font-Montserrat font-weight-bold" style={{ fontSize: "55px", lineHeight: "64px" }}>
                <span className="text-[#043EA7]">Coming Soon:</span>
                <br />
              </h1>
              <h1 className="text-[#001438]  fs-2 fs-lg-3 lh-1.5 font-Montserrat" style={{ fontSize: "30px", lineHeight: "45px", fontWeight: 600 }}>
                Dive into the World of <br /> Color Prediction!
              </h1>
              <p className="text-[#8E8E8E]  fs-sm-lg mb-4 mb-lg-6 lh-1.5 font-Montserrat" style={{ fontSize: "20px", lineHeight: "35px", fontWeight: 500 }}>
                Prepare to Test Your Luck: The Color Prediction Game is Coming Soon! Get Ready to Predict and Win Big. Stay Tuned for Thrills, Excitement, and Endless Possibilities!
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-12 col-sm-6 d-flex align-items-center justify-content-center mt-4 mt-sm-0"
          >
            <div className="w-100 h-auto">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="img-fluid"
                width={600} // Adjusted width
                height={600} // Adjusted height
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
