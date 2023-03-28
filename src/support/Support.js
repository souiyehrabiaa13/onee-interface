import React from 'react'
import supp from '../pictures/R.jpeg'
import './Support.css'
const Support = () => {
  return (
    <div className='support' id='support'>
        <div className='bnrimg'>
            <img className='supp_img' src={supp}/> 
        </div>
        <div className='bnrinput'>
            <h1>Support</h1>
            <label>Nom:</label><br/>
            <input type='text' name='nom' placeholder='Enter Your Name...'/><br/>
            <label>E-mail:</label><br/>
            <input type='email' name='email' placeholder='Enter Your Email...'/><br/>
            <label>Message:</label><br/>
            <textarea></textarea><br/>
            <input type='submit' name='btn' className='btn' value='Envoyer'/>
        </div>
    </div>
  )
}

export default Support
