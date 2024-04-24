import React from 'react'
import {baseImgUrl2 } from '../../helpers/functions-general'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../partials/Header'
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlashSolid } from "react-icons/lia";



const Login2 = () => {

  const navigate = useNavigate();
  const [hasValue, setHasValue] = React.useState(false);
  const [showPassword, setshowPassword] = React.useState(false);
  const [getEmail, setGetEmail] = React.useState('');
  const [getPassword, setGetPassword] = React.useState('');

  let email = "piolo18aranza@gmail.com";
  let password = "1234";

  const handleChange = (e) => {
    if(e.target.value !== "") {
 setHasValue(true);
 setGetPassword(e.target.value)
} else {
 setHasValue(false);
}
}
const handleGetEmail = (e) => setGetEmail(e.target.value)

  const handleshowPassword = () => setshowPassword(!showPassword)

   const handleCheckLogin = () => {
   if ((getEmail === email) && (getPassword === password)) {
    navigate('/home')
    console.log("Pasok Kapuso!!!");
   } else {
    console.log("Accent not granted");
   }
  }
  


  return (
    <>
      <div className="login bg-[url('../../img/netflix-bg.jpg')] h-screen w-full isolate bg-cover relative">
        <div className="backdrop h-full w-full absolute top-0 left-0 bg-black/60 z-[-1]"></div>
        <Header isLogin={true}/>

        <div className="form absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[450px] bg-black/70 rounded-md h-[800px] p-14">
              <h1 className='text-3xl text-white mb-8 font-Bold'>Sign In</h1>

              <form action="" className='text-white'>

                <div className="input-wrapper">
                  <input type="text" name='email' required  onChange={(e) => handleGetEmail(e)}/>
                  <label htmlFor="email">Mail or mobile Number</label>
                </div>

                <div className="input-wrapper">
                  <input type={showPassword ? "text" : "password"} name='password' required onChange={(e) => handleChange(e)}/>
                  <label htmlFor="password">password</label>

                  {hasValue && (
                  <button type="button" className='text-white absolute top-5 right-3 text-lg' onClick={handleshowPassword}>
                    {showPassword ? <LiaEyeSlashSolid /> : <LiaEyeSolid />}
                    </button>
                )}

                </div>

                  <button type='button' className="w-full p-2 rounded-md bg-accent text-white" onClick={handleCheckLogin}>Sign In</button>
                  <span className='block text-center my-3 uppercase'>or</span>

                  <button type='button'className="w-full p-2 rounded-md bg-white/20 text-white" 
                 >Use or sign in a code</button>

                  <Link className='block text-center my-4 hover:underline'>Forgot Password</Link>

                  <div className='mb-5 flex gap-2'>
                    <input type="checkbox" name="" id=""/>
                    Remember Me
                  </div>

                  <p className='mb-5 '>New to Netflix? <Link to="#" className='font-bold'>Sign up now.</Link></p>

                  <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className='text-blue-600 hover:underlined'>Learn more.</Link></p>

              </form>
            </div>
        </div>

      </div>
    </>
  )
}

export default Login2
