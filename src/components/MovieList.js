import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  return (
    <div className="pl-16">
        <h1 className="text-white pt-9 pb-3 text-2xl font-bold">{title}</h1>
      <div className="flex overflow-x-hidden">
        <div className="flex ">
            {movies?.map(movie =>
           <MovieCard key={movie?.id} posterPath={movie?.poster_path}/> 
         )} 
        </div>
      </div>
    </div>
  );
};

export default MovieList;
