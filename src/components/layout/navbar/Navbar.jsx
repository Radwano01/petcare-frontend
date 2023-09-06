import React, { useRef } from 'react'
import "./navbar.scss"
import { NavLink } from 'react-router-dom'
import {MdPets} from "react-icons/md"
import {GrFacebookOption} from "react-icons/gr"
import {AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai"
import {BsFillTelephoneFill} from "react-icons/bs"
import {BiLogoTelegram} from "react-icons/bi"
import {FaTimes, FaBars} from "react-icons/fa"

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = ()=>{
      navRef.current.classList.toggle("responsive-nav")
    }
    
  return (
    <div className='navbar'>
        <div className="top-navbar">
            <div className="left">
                <div className="phone">
                    <span><BsFillTelephoneFill /> <h10>+00 1234 567</h10></span>
                    <span><BiLogoTelegram /> <h10>youremail@email.com</h10></span>
                </div>
            </div>
            <div className="right">
                <span><GrFacebookOption/></span>
                <span><AiOutlineTwitter/></span>
                <span><AiOutlineInstagram/></span>
            </div>
        </div>
        <div className="bottom-navbar">
            <div className="left">
                <span><MdPets color='rgba(69, 219, 0, 0.781)' size={30}/></span>
                <a href="/"><h1>Pet sitting</h1></a>
            </div>
            <div className="right">
                <ul ref={navRef}>
                    <li>
                        <NavLink to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/veterinarian">VETERINARIAN</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">SERVICES</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">GALLERY</NavLink>
                    </li>
                    <li>
                        <NavLink to="/price">PRICING</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">BLOG</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">CONTACT</NavLink>
                    </li>
                    <button onClick={showNavbar} className='nav-btn nav-close-btn'>
                        <FaTimes size={30}/>
                    </button>
                </ul>
                <button className='nav-btn bar' onClick={showNavbar}>
                    <FaBars size={30}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar