import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-30">
        <img
          className="bg-black bg-opacity-25"
          src={BG_IMG}
          alt="Netflix"
        />
      </div>
      <div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </div>
  )
}

export default GptSearch
