import React from 'react'
import Slider from '../slider/Slider'
import Features from '../features/Features'
import About from '../about/About'
import ClientCount from '../clientCount/ClientCount'
import Questions from '../questions/Questions'
import FeedBack from '../feedback/FeedBack'
import Price from '../price/Price'
import Gallery from '../gallery/Gallery'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'


const Home = () => {
  return (
    <div className='home'>
        <Slider/>
        <Features/><br /><br /><br /><br /><br /><br />
        <About/><br /><br /><br /><br /><br /><br />
        <ClientCount/>
        <Questions/>
        <FeedBack/>
        <Price/>
        <Gallery/>
        <Blog/>
        <Contact/>
    </div>
  )
}

export default Home