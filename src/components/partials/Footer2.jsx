import React from 'react'
import { PiCaretDownFill, PiTranslate } from 'react-icons/pi'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer2 = () => {
  return (
    <>
    <footer className='features border-t-[5px]  border-gray-500 bg-black py-12 text-white'>
    <div className='max-w-[1000px] mx-auto px-4 mb-10'>
    <ul className='flex justify-between items-center max-w-[200px] mt-5 mb-1'>
        <li><FaFacebookF /></li>
        <li><FaInstagram /></li>
        <li><FaTwitter /></li>
        <li><FaYoutube /></li>
    </ul>
        <div className='grid grid-cols-4 mt-5 place-items-start text-[#b3b3b3] gap-10'>
    <ul className=' space-y-5'>
        <li>FAQ</li>
        <li>Investor Relations</li>
        <li>Ways to Watch</li>
    </ul>
    <ul className=' space-y-5'>
        <li>Help Center</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
    </ul>
    <ul className=' space-y-5'>
        <li>Account</li>
        <li>Redeem Gift Cards</li>
        <li>Privacy</li>
    </ul>
    <ul className=' space-y-5'>
        <li>Media Center</li>
        <li>Buy Gift Cards</li>
        <li>Cookie Preferences</li>
    </ul>
   
        </div>

        <button className="py-1 px-3 border-[1px] border-stone-600 rounded-md bg-[#0f0f0f] flex gap-2 items-center mb-5 mt-5">
        <PiTranslate />
        Service Code <PiCaretDownFill className="text-xs" />
      </button>

      <p className='text-[#b3b3b3] text-xs'>© 1997 - 2024 Netflixx Inc.</p>
    </div>

</footer>
</>
  )
}

export default Footer2
