import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondContainor from './SecondContainor'
const Browse = () => {

useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondContainor/>
    </div>
  )
}

export default Browse
