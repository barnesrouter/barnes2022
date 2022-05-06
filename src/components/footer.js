import React from "react"
import { Link } from "gatsby"
//import Image from "gatsby-image"
import logo1 from "../../content/assets/Barnes-4C-logo.png";

const Footer = () => {
    
    return (
        <footer>
            <div className="top-footer flex-md justify">
              
              <img src={logo1} alt="Barnes Footer Logo" className="bheader-logo" />
              <p className="footer-nav"><Link to="/about-us/employment">Employment</Link> | <Link to="/about-us/contact-us">Contact Us</Link> | <a href="https://secure.usaepay.com/interface/epayform/VG1IwctRzVNP1MZvwyKq0YJ4dbCdwjhe">Pay Online</a></p>
            </div>
            <div className="sub-footer">
            © {new Date().getFullYear()}, Barnes Nursery
            </div>
        </footer>
          
      )
  }
  
  
  export default Footer
  
  