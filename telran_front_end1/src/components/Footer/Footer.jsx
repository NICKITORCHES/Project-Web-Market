import React from 'react'
import s from "./Footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='text'>
        <div className='leftBlock'>
          <h1>Contact</h1>
          <h1>+49 999 999 99 99</h1>
          <div className='sociallinks'>
            <a href='https://www.instagram.com' className='instagram'></a>
            <a href='https://web.whatsapp.com' className='whatsapp'></a>
          </div>
          <div className='sociallinkstxt'>
            <a href='https://www.instagram.com' className='instagramtxt'>Instagram</a>
            <a href='https://web.whatsapp.com' className='whatsapptxt'>Whatsapp</a>
          </div>
        </div>
        <div className='rightBlock'>
          <h1>
            Address
          </h1>
          <h1>
            <a href='https://www.google.com/search?q=telranDE'>Linkstraße 2, 8 OG, 10785,<br></br>
              Berlin, Deutschland</a>
          </h1>  
            Working Hours:
            <b>
              24 hours a day
            </b>
        </div>
      </div>
      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.636886541603!2d13.3750447!3d52.5079329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1696870268215!5m2!1sru!2sde"width="1440px" height="525"></iframe>
      </div>
    </footer>
    
  )
}
