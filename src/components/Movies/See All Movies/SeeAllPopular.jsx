import React, { useEffect, useState } from "react";
import tmdb from "@/pages/api/tmdb";
import MovieCard from "../MovieCard";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get("movie/popular");
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <h1>Popular</h1>
      </div>
      <hr />

      <div className="flex pb-5 px-5 flex-wrap mx-auto gap-4">
        {movies.map((movie, index) => {
          return <MovieCard key={index} {...movie} />;
        })}
      </div>
    </>
  );
};

export default Popular;
