import React from 'react'
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="left"></div>
        <div className="right">
            <div className="title">
                <h1>Free Consultation</h1>
            </div>
            <form>
                <select placeholder='Select services'>
                    <option>Select services</option>
                    <option>Cat Sitting</option>
                    <option>Cat Sitting</option>
                    <option>Cat Sitting</option>
                    <option>Cat Sitting</option>
                </select>
                <div className="inputs">
                    <input type="text" placeholder='    Your Name'/>
                    <input type="text"  placeholder='    Vehicle Number'/>
                    <input type="date" placeholder='Date'/>
                    <input type="time"  placeholder='Time'/>
                </div>
                <textarea placeholder='   Message'></textarea>
            </form>
        </div>
    </div>
  )
}

export default Contact