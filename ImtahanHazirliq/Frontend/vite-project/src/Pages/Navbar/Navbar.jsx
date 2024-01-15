import React from 'react'
import { FaFacebook } from "react-icons/fa";
import "./../Navbar/Navbar.scss"
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
   <>
    <div className='mainNav'>
<div className="nav1">
  <div className="icons">
    <div className="icon1">
    <FaFacebook />
    </div>
    <div className="icon2">
    <FaTwitter />
    </div>
    <div className="icon3">
    <AiFillInstagram />
    </div>
    <div className="icon4">
    <FaLinkedin />
    </div>
  </div>
  <div className="elaqe">
    <div className="phone">
   <div className="i"> <FaPhoneAlt /></div>
   <div className="ph">(+1) 234  6798 2134</div>
    </div>
    <div className="mail">
<div className="im">
<IoMdMail />
</div>
<div className="em">
  shop@yourdomain.com
</div>
    </div>
  </div>
</div>

<div className="nav2">
<div className="title"><h1>Selling</h1></div>

<div className="pagess">
  <Link to={"/"}> <div className="home">Home</div></Link>
  <Link to={"add"}> <div className="addProduct">AddProduct</div></Link>
 
</div>
</div>

    </div>
   </>

  )
}

export default Navbar