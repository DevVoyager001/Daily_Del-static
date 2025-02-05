import React from 'react'

const ExploreApp = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 p-10'>
        <div className=' w-fit h-fit text-sm bg-red-400 rounded-full px-[5px]'><h1>Explore the Daily Del App</h1></div>
        <h1 className='text-3xl font-bold mt-4'>Effortless browsing and quick delivery, designed for you.</h1>
        <div className='mt-5'>
            <img className='w-[700px] h-auto' src="../src/assets/appFrame.png" alt="" />
        </div>
    </div>
  )
}

export default ExploreApp