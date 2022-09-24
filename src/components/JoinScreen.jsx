import React from 'react'

const JoinScreen = ({ start }) => {
    return (
        <div className='w-full h-[350px] flex flex-col justify-center items-center gap-5 text-center p-5 join-screen'>
            <h2 className='text-[#111] text-[25px]'> Join screen</h2>
            <p className='max-w-[350px] text-[#555]'>Welcome to Vibez room quiz </p>
            <button onClick={start} className="cursor-pointer  py-[10px] px-5 bg-[#111] text-[#fff] border-none outline-none text-[15px] rounded-[5px] font-poppins">Start Violence😂 </button>
        </div>
    )
}

export default JoinScreen