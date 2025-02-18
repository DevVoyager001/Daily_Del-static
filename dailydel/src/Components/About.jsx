import React from 'react'

const About = () => {
  return (
    <>
    <div className='p-5 flex justify-center'>
        <div className="card lg:card-side bg-base-100 shadow-sm ">
            <figure>
                <img
                className='w-[400px] md:w-[500px] rounded-xl'
                src="../src/assets/aboutImg.png"
                alt="Album" />
            </figure>
            <div className="card-body md:w-[500px] mt-auto mb-auto">
                <div className=' w-fit h-fit text-sm bg-red-400 rounded-full px-[5px]'><h1>About Us</h1></div>
                <h2 className="card-title font-bold text-3xl">Delivering Happiness Daily</h2>
                <p className='text-[#1C1C1C99]'>Daily Del connects you with local shops across a wide range of categories—from groceries to electronics. Discover and shop essentials from your neighborhood with a ‘Support Local’ focus, all delivered to you in just 15 minutes!</p>
            </div>
        </div>
    </div>

    <div className='flex flex-col md:flex-row flex-wrap m-8 items-center justify-center gap-5'>
        <div className="card shadow-sm bg-[#F3F4F6] w-[296px] h-[302px]">
            <figure className="px-10 pt-10">
                <img
                className='w-20 h-auto rounded-xl'
                src="../src/assets/aboutImg1.png"
                alt="Shoes"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">100+</h2>
                <p>Orders Delivered & Counting</p>
            </div>
        </div>

        <div className="card shadow-sm bg-[#F3F4F6] w-[296px] h-[302px]">
            <figure className="px-10 pt-10">
                <img
                className='w-20 h-auto rounded-xl'
                src="../src/assets/aboutImg2.png"
                alt="Shoes"
                 />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">100+</h2>
                <p>Happy Customers & Growing!</p>
            </div>
        </div>

        <div className="card shadow-sm bg-[#F3F4F6] w-[296px] h-[302px]">
            <figure className="px-10 pt-10">
                <img
                className='w-20 h-auto rounded-xl'
                src="../src/assets/aboutImg3.png"
                alt="Shoes"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">50+</h2>
                <p>Shops Partnered, Expanding Daily!</p>
            </div>
        </div>

        <div className="card shadow-sm bg-[#F3F4F6] w-[296px] h-[302px]">
            <figure className="px-10 pt-10">
                <img
                className='w-20 h-auto rounded-xl'
                src="../src/assets/courier-boy.png"
                alt="Shoes"
                 />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">20+</h2>
                <p>Delivery Partners Ready to Serve!</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About