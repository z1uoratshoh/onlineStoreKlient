import React from 'react'

import google from '../../assets/images/google.png'

import MyButton from '../../components/myButton/myButton'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[700px]' >
            <section>
            <nav>
                 <h1 className='text-[36px] font-[500]' >Create an account</h1>
                 <h2 className='text-[16px] font-[400] mb-[20px]' >Enter your details below</h2>
             </nav>
             <div className='grid gap-[20px]' >
                 <input className='w-[420px] h-[56px] pl-[20px]  block border-[1.5px] border-gray-300 rounded-[4px]' type="search" placeholder='Name' />
                 <input className='w-[420px] h-[56px] pl-[20px]  block border-[1.5px] border-gray-300 rounded-[4px]' type="search" placeholder='Email or phone number' />
                 <input className='w-[420px] h-[56px] pl-[20px]  block border-[1.5px] border-gray-300 rounded-[4px]' type="search" placeholder='Password' />
                 <MyButton text={'Create Account'} style={'w-[420px]'} />
                   <div className='flex items-center justify-center gap-[10px] border-[1.5px] border-gray-300 rounded-[4px]  w-[420px] h-[56px]' >
                        <img className='' src={google} alt="" />
                        <p >Sign up with Google</p>
                   </div>
                   <div className='text-center' >
                    <h1 className='text-[17px] font-[400] text-[#000000af]' >Already have an account? <span className='pl-[30px] underline underline-offset-8' >Log in</span></h1>
                   </div>
             </div>
            </section>
    </div>
  )
}

export default Login