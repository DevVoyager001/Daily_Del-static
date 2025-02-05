import React from 'react'

const Home = () => {
  return (
    <div className='mt-20 p-5'>
        <div className="flex w-full flex-col lg:flex-row">
            <div className="card  rounded-box h-fit flex-grow p-5 gap-4">
                <div className=' w-fit h-fit text-sm bg-red-400 rounded-full px-[5px]'><h1>Online delivery service</h1></div>
                <h1 className='text-4xl md:text-6xl font-bold' style={{ wordSpacing: "3px" }} >Bringing Joy to Your <br/> Doorstep, <span className='text-[#C43758]'>Every Day!</span></h1>
                <h2 className='text-sm'>One Stop for all your Essentials! Delivered in Just 15 mins.</h2>
                <div className='button flex gap-4'>
                    <button className="btn bg-[#C43758] text-white rounded-full w-fit px-10">Get Started</button>
                    <button className="btn bg-white border border-[#C43758] text-[#C43758] rounded-full w-fit px-10">Learn more</button>
                </div>
                <h2 className='mt-5 text-black'>For better service download now</h2>
                <div className='button flex gap-2'>
                    <button className="w-28"><img className='w-full h-auto' src="../src/assets/AppStoreBlack.png" alt="" /></button>
                    <button className="w-28"><img className='w-full h-auto' src="../src/assets/googlePlay.png" alt="" /></button>
                </div>
                
            </div>

            <div className="w-3"></div>

            <div className="card  rounded-box w-fit h-fit flex place-items-center py-11">
                <img className='w-[700px] h-auto' src="../src/assets/homeBgImg.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home