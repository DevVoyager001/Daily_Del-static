import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const [state, handleSubmit] = useForm('xvgzdpyv');
  const [showSuccess, setShowSuccess] = useState(false); // State to control success message visibility
  const formRef = useRef(null); // Ref to access the form element

  // Handle form submission success
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true); // Show success message
      formRef.current.reset(); // Clear form inputs

      // Auto-dismiss the success message after 5 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      // Cleanup the timer
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-5 p-10'>
      {/* Success Message (Bottom Left Corner) */}
      {showSuccess && (
        <div
          role="alert"
          className="alert alert-success fixed bottom-5 right-5 w-[300px] z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your message has been sent successfully!</span>
        </div>
      )}

      {/* Contact Form */}
      <div className='w-[90%] md:w-[50%]'>
        <div className='w-fit h-fit text-sm bg-red-400 rounded-full px-[5px]'>
          <h1>Contact Us</h1>
        </div>
        <h2 className='text-3xl font-bold mt-3'>We are here to help!</h2>
        <p className='mt-2 text-[#1C1C1C99]'>
          If you have any questions, feedback, or need assistance, feel free to reach out to our dedicated support team. Your satisfaction is our priority!
        </p>
        <div className='divider p-3'></div>
        <div className='flex gap-2'>
          <img className='text-sm' src="../src/assets/bxs_phone-call.svg" alt="" />
          <h1 className='text-sm'>support@dailydel.com</h1>
        </div>
        <div className='flex gap-2 mt-1 text-[#434343] text-sm'>
          <img className='text-sm' src="../src/assets/Vector.svg" alt="" />
          <h1>+91 9769163207</h1>
        </div>
      </div>

      {/* Form */}
      <form ref={formRef} onSubmit={handleSubmit} className='w-[90%] md:w-[50%]'>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Your name</span>
          </div>
          <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full" required />
        </label>
        <div className='flex gap-2 w-[100%]'>
          <label className="form-control w-[50%]">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input type="email" name="email" placeholder="Email address" className="input input-bordered w-full" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>
          <label className="form-control w-[50%]">
            <div className="label">
              <span className="label-text">Phone</span>
            </div>
            <input type="tel" name="phone" placeholder="Phone number" className="input input-bordered w-full" required />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Questions/comments</span>
          </div>
          <textarea className="textarea textarea-bordered h-24" name="message" placeholder="Your message" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </label>
        <button type="submit" disabled={state.submitting} className="btn mt-2 w-full bg-[#B51957] text-white">
          {state.submitting ? 'Submitting...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;