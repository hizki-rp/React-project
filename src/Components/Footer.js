import React from 'react';


const Footer = () => {
const fontStyle = {
  color: "white",
}
  return (
   <div className='footer'>
    <div className='fonts' style={fontStyle}>
    <a href='https://www.instagram.com/hizkiy?igshid=OGQ5ZDc2ODk2ZA=='><i class="fa-brands fa-instagram"></i></a>
    <a href='https://github.com/hizki-rp'><i class="fa-brands fa-github"></i></a>
    <a href='https://www.linkedin.com/in/hizkiyas-bogale-ab5675273/'><i class="fa-brands fa-linkedin"></i></a>
    <a href='https:wa.me/+251943349980'><i class="fa-brands fa-whatsapp"></i></a>
    </div>

    <p className='copy'>	&#169; portfolio copyright, all rights reserved.</p>
   </div>
  )
}

export default Footer;