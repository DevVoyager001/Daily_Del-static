import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='mt-20 p-5'>
        <div className="flex w-full flex-col lg:flex-row">
            <div className="card  rounded-box h-fit flex-grow p-5 gap-4">
                <div className=' w-fit h-fit text-sm bg-red-400 rounded-full px-[5px]'><h1>Online delivery service</h1></div>
                <h1 className='text-4xl md:text-6xl font-bold' style={{ wordSpacing: "3px" }} >Bringing Joy to Your <br/> Doorstep, <span className='text-[#C43758]'>Every Day!</span></h1>
                <h2 className='text-sm'>One Stop for all your Essentials! Delivered in Just 15 mins.</h2>
                <div className='flex flex-col gap-2 button md:flex-row md:gap-4'>
                    <button className="btn bg-[#C43758] text-white rounded-full w-fit px-10" onClick={()=>{navigate("/about")}}>Get Started</button>
                    <button className="btn bg-white border border-[#C43758] text-[#C43758] rounded-full w-fit px-10" onClick={()=>{navigate("/contact")}}>Learn more</button>
                </div>
                <h2 className='mt-5 text-black'>For better service download now</h2>
                <div className='button flex gap-2'>
                <a 
                href="https://apps.apple.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-28"
                >
                <img 
                    className='w-full h-auto' 
                    src="/assets/AppStoreBlack.png" 
                    alt="Download on the App Store" 
                />
                </a>

                <a 
                href="https://play.google.com/store/apps/details?id=com.DailyDel" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-28"
                >
                <img 
                    className='w-full h-auto' 
                    src="/assets/googlePlay.png" 
                    alt="Download on the App Store" 
                />
                </a>
                </div>
                
            </div>

            <div className="w-3"></div>

            <div className="card rounded-box w-fit h-fit flex place-items-center py-11">
                <img className='w-[700px] h-auto' src="/assets/homeBgImg.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home