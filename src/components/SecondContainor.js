import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondContainor = () => {

  const movies = useSelector((store) => store?.movie);

  return (
      <div className='bg-black'>
    <div className=' -mt-52 relative '>
      <MovieList title={"Now Playing"} movies = {movies?.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies = {movies?.popularMovies}/>
      <MovieList title={"Top Rated"} movies = {movies?.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies = {movies?.upComingMovies}/>
    </div>
    </div>
  )
}

export default SecondContainor;
