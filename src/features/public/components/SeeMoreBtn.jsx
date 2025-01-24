import React from 'react'
import { useNavigate } from 'react-router-dom'

const SeeMoreBtn = ({className,path}) => {
  const nav = useNavigate();
  return (
    <button onClick={()=> nav(path)} className={`w-[191px] h-[70px] bg-neutral-700 text-white ${className} `}>
        See More
    </button>
  )
}

export default SeeMoreBtn