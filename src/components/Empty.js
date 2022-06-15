import React from 'react'
import empty from '../assets/images/empty.png'
const Empty = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <img src={empty} className="w-80 h-80" />
    </div>
  )
}

export default Empty