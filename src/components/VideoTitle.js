import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className= 'absolute w-[98vw] aspect-video pt-56 pl-16 bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold text-white '>{title}</h1>
      <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
      <div>
        <button className=' bg-white text-black mx-2 py-2 px-3 rounded-md font-bold hover:bg-opacity-80'>▶ Play</button>
        <button className=' mx-2 p-2 rounded-md bg-slate-700 text-white font-bold hover:bg-slate-400'>ℹ More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
