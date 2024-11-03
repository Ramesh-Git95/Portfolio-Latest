import React from 'react'

const Tag = ({name,logo}) => {
  return (
    <>

    <span className='rounded-xl bg-background p-1 gap-2 inline-flex bg-gradient-to-l from-gray-100 to-slate-400'>
    <img src={logo} alt="" className="self-center w-8 h-8"/>
    <span className='inline-flex text-black font-bold text-m mr-3'>{name}</span>
    </span>
    
    </>
  )
}

export default Tag