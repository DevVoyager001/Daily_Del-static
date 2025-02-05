import React from 'react'

const ContactUs = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-5 p-10'>
        <div className='w-[90%] md:w-[50%]'>
            <div className=' w-fit h-fit text-sm bg-red-400 rounded-full px-[5px]'><h1>Contact Us</h1></div>  
            <h2 className='text-3xl font-bold mt-3'>We are here to help!</h2>
            <p className='mt-2 text-[#1C1C1C99]'>If you have any questions, feedback, or need assistance, feel free to reach out to our dedicated support team. Your satisfaction is our priority!</p>
            <div className='divider p-3'></div>
            <div className='flex gap-2'>
                <img className='text-sm' src="../src/assets/bxs_phone-call.svg" alt="" />
                <h1 className='text-sm'>support@dailydel.com</h1>
            </div>
            <div className='flex gap-2 mt-1 text-[#434343] text-sm'>
                <img className='text-sm' src="../src/assets/Vector.svg" alt="" />
                <h1>+91 9876543210</h1>
            </div>
        </div>

        <form className='w-[90%] md:w-[50%]'>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Your name</span>
                </div>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full" />
            </label>
            <div className='flex gap-2 w-[100%]'>
                <label className="form-control w-[50%]">
                    <div className="label ">
                        <span className="label-text">Email</span>
                    </div>
                    <input type="email" name="email" placeholder="Email address" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-[50%]">
                    <div className="label">
                        <span className="label-text">Phone</span>
                    </div>
                    <input type="tel" name="phone" placeholder="Phone number" className="input input-bordered w-full" />
                </label>
            </div>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Questions/comments</span>
                </div>
                <textarea className="textarea textarea-bordered h-24" name="question" placeholder="Your message"></textarea>
            </label>
            <button type='submit' className="btn mt-2 w-full bg-[#B51957] text-white">Send</button>
        </form>
    </div>
  )
}

export default ContactUs