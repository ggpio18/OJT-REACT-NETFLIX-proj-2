import React from 'react'
import { PiCaretDownFill, PiTranslate } from 'react-icons/pi'

const Footer = () => {
  return (
    <footer className='features border-t-[5px]  border-gray-500 bg-black py-12 text-white'>
        <div className='max-w-[1000px] mx-auto px-4 mb-10'>
        <p className='text-[#b3b3b3] underline mt-10'>Questions? Contact us.</p>
            <div className='grid grid-cols-4 mt-5 place-items-start text-[#b3b3b3] gap-10'>
        <ul className='underline space-y-5'>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
        </ul>
        <ul className='underline space-y-5'>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
        </ul>
        <ul className='underline space-y-5'>
            <li>Account</li>
            <li>Redeem Gift Cards</li>
            <li>Privacy</li>
            <li>Speed Test</li>
        </ul>
        <ul className='underline space-y-5'>
            <li>Media Center</li>
            <li>Buy Gift Cards</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
        </ul>
       
            </div>

            <button className="py-1 px-3 border-[1px] border-stone-600 rounded-md bg-[#0f0f0f] flex gap-2 items-center mb-5 mt-5">
            <PiTranslate />
            English <PiCaretDownFill className="text-xs" />
          </button>
        </div>

    </footer>
  )
}

export default Footer
