import React from 'react'
import "./contactsection.scss"
import {MdLocationOn} from "react-icons/md"
import img from "../../../assets/images/img.jpg"

const ContactSection = () => {
  return (
    <div className='contactsection'>
        <div className="slider-contact-section">
            <div className="slider-contact-section-container">
                Home / Contact
                <h1>CONRACT US</h1>
            </div>
        </div>
        <div className="contactsection-container">
            <div className="title">
                <h1>Contact Form #03</h1>
            </div>
            <div className="icons">
                <div className="icon">
                    <MdLocationOn size={50} style={{backgroundColor:"#00bd55", borderRadius:"50%", padding:"10px", color:"white", margin:"30px"}}/>
                    <div className="type">
                        <b>Address:</b><span> 198 West 51th Street,<br /></span>
                        <span>Suite 751 New York NY 10016</span>
                    </div>
                </div>
                <div className="icon">
                    <MdLocationOn size={50} style={{backgroundColor:"#00bd55", borderRadius:"50%", padding:"10px", color:"white", margin:"30px"}}/>
                    <div className="type">
                        <b>Phone:</b><span style={{color:"#00db55"}}> +1 534 56789</span>
                    </div>
                </div>
                <div className="icon">
                    <MdLocationOn size={50} style={{backgroundColor:"#00bd55", borderRadius:"50%", padding:"10px", color:"white", margin:"30px"}}/>
                    <div className="type">
                    <b>Email:</b><span style={{color:"#00db55"}}> info@youremail.com</span>
                    </div>
                </div>
                <div className="icon">
                    <MdLocationOn size={50} style={{backgroundColor:"#00bd55", borderRadius:"50%", padding:"10px", color:"white", margin:"30px"}}/>
                    <div className="type">
                        <b>Website:</b><span style={{color:"#00db55"}}> yoursite.com</span>
                    </div>
                </div>
            </div><br /><br /><br />
            <div className="form">
                <div className="left">
                    <h1>Contact Us</h1><br />
                    <form>
                        <div className="inputs">
                            <label htmlFor="name">FULL NAME</label>
                            <input id='name' name='name' type="text" placeholder='  Name'/>
                            <label htmlFor="name">EMAIL ADDRESS</label>
                            <input type="text" placeholder='  Email'/>
                            <label htmlFor="name">SUBJECT</label>
                            <input type="text" placeholder='  Subject'/>
                        </div>
                        <textarea placeholder='  Message' cols="70"></textarea>
                    </form>
                </div>
                <div className="right">
                    <div className="img">
                        <img src={img} alt="" style={{width:"430px", height:"600px"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection