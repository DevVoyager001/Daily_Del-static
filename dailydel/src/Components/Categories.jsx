import React from 'react'

const Categories = () => {
  return (
    <>
    <div className='flex flex-col items-center p-10'>
        <div className=' w-fit h-fit text-sm bg-red-400 rounded-full px-[5px] my-2'><h1>6 Categories | 50+ Shops</h1></div>
        <h1 className='text-2xl text-center md:text-3xl font-bold mt-2'>You Need It? Tap It! All Your Daily Essentials from Trusted Nearby Stores, Right at Your Fingertips.</h1>
    </div>
    <div className='flex flex-wrap gap-5 px-5 justify-center md:px-20'>
        <div className="card bg-[#FFB800] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Grocery</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>20+ Shops</h1></div>   
                    <img className='w-32 h-auto flex-end' src="/assets/Categories.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="card bg-[#E72019] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Resturant</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>20+ Shops</h1></div>   
                    <img className='w-28 h-auto flex-end' src="/assets/meal.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="card bg-[#71A43D] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Vegetables</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>10+ Shops</h1></div>   
                    <img className='w-auto h-24 flex-end' src="/assets/vegetables.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="card bg-gradient-to-b from-[#FCC022] to-[#E72019] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Stationary</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>10+ Shops</h1></div>   
                    <img className='w-auto h-24 flex-end' src="/assets/Stationery.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="card bg-[#4364F7] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Electronics</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>10+ Shops</h1></div>   
                    <img className='w-auto h-28 flex-end' src="/assets/electronics.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="card bg-[#B51957] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Fish/Meat</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>10+ Shops</h1></div>   
                    <img className='w-28 h-auto flex-end' src="/assets/meat.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Categories