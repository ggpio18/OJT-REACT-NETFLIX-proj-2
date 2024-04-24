import React from 'react'
import Header from '../../partials/Header'
import { PiCaretRightBold } from "react-icons/pi";
import Features from './Features';
import { faq, feature } from './data';
import { GoPlus } from "react-icons/go";
import Accordion from './Accordion';
import FormSubscribe from './Form';
import Footer from '../../partials/Footer';



const Home = () => {
  return (
    <>
    <div className="banner bg-[url('../../img/netflix-bg.jpg')] h-[70vh] w-full isolate bg-cover isolate relative">
         <div className="backdrop h-full w-full absolute top-0 left-0 bg-black/70 z-[-1]"></div>
        <Header isLogin={false}/>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%]'>
            <h1 className='text-white text-6xl font-bold text-center mb-8 '>Unlimited movies, TV shows, and more</h1>
            <p className='text-center text-2xl mb-5 text-white'>Watch anywhere. Cancel anytime.</p>
            <p className='text-center text-2xl mb-5 text-white'>Ready to watch? Enter your email to create or restart your membership.</p>

            <FormSubscribe/>
        </div>
      
    </div>

    <div className='feature-list'>
        {feature.map(((item, key) => <Features item={item} key={key}/>))}
    </div>

    <div className='faqs bg-black py-12 text-white'>
        <div className='max-w-[1000px] mx-auto px-4 mb-10'>
            <h2 className='text-2xl font-bold mb-10 text-center'>Frequently Asked Questions</h2>
           {faq.map((item, key) => (
            <Accordion item={item} key={key}/>
           ))}
        </div>
        <p className="text-center text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
        <FormSubscribe/>
        <Footer/>
    </div>



   

</>
  )
}

export default Home
