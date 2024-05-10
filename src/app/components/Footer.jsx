import React from "react";
import { FaArrowAltCircleUp, FaPhone, FaRegArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="picassoFooter">
      <div>
        <h4>Color
          Prediction</h4>
      </div>
      <div>
        <h4>123 Market St. #22B <br />
          Charlottesville, California <br /> 44635</h4>
        <div className="mt-4">
          <h6>(434) 546-4356</h6>
        </div>
        <div className="mt-4">
          <h6>contact@lift.agency</h6>
        </div>
      </div>
      <div className="footer-navigation">
        {/* <h3>Quick Links</h3> */}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Growers</a></li>
          <li><a href="#services">Merchants</a></li>
          <li><a href="#contact">Partners</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-navigation">
        {/* <h3>Quick Links</h3> */}
        <ul>
          <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
          <li>  <a href="https://twitter.com" target="_blank">Twitter</a></li>
          <li><a href="#services">Linkedin</a></li>
          <li> <a href="https://instagram.com" target="_blank" >Instagram</a></li>
        </ul>
      </div>
      <div className="footer-social">
       
        <div>
         <div className="button-up"> <a href="#" style={{ color: "white" }}>
              <FaRegArrowAltCircleUp />
            </a></div>
         
        </div>
      </div>
     
    </footer>

  );
};

export default Footer;
