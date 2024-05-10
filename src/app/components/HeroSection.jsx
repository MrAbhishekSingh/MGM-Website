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

  // const handleDownload = () => {
  //   window.location.href = '/public/images/app-release.apk'; // Update the path if necessary
  // };
  const handleDownload = () => {
    // Construct the URL to the APK file
    const apkUrl = '/public/images/app-release.apk'; // Adjust the path if necessary

    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = apkUrl;
    downloadLink.setAttribute('download', 'MGM.apk'); // Set the download attribute

    // Append the anchor element to the document body
    document.body.appendChild(downloadLink);

    // Trigger the click event on the anchor element
    downloadLink.click();

    // Clean up
    document.body.removeChild(downloadLink);
  };

  return (
    <section className="p-2" style={{ backgroundColor: '#fff' }}>
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
                <span className="text-[#043EA7]">Experience the Thrill </span>
                <br />
              </h1>
              <h1 className="text-[#001438]  fs-2 fs-lg-3 lh-1.5 font-Montserrat" style={{ fontSize: "30px", lineHeight: "45px", fontWeight: 600 }}>
                MGM - MultiMagicGame App <br /> Download Now!
              </h1>
              <p className="text-[#8E8E8E]  fs-sm-lg mb-4 mb-lg-6 lh-1.5 font-Montserrat" style={{ fontSize: "20px", lineHeight: "35px", fontWeight: 500 }}>
                Dive into a world of endless fun and excitement with MGM - MultiMagicGame app! Immerse yourself in a myriad of captivating games all in one place. Whether you're into puzzles, adventures, or strategy, MGM offers a diverse collection to suit every gaming preference. Download now and unlock a universe of entertainment at your fingertips!
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
          <div style={{ height: 100 }}>
            <button onClick={handleDownload} type="button" class="btn btn-success">Click To Download!</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
