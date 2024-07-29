import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className=' w-48 pr-3'>
      <img className='rounded-md' alt='movie card' src={IMG_CDN_URL+ posterPath} />
    </div>
  )
}

export default MovieCard
