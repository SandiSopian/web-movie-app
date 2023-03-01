import React, { useEffect, useState } from "react";
import tmdb from "@/pages/api/tmdb";
import MovieCard from "./MovieCard";
import Link from "next/link";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get("/movie/top_rated");
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <h1>Top Rated</h1>
        <Link href="/topRated">See all</Link>
      </div>
      <hr />

      <div className="flex pb-5 px-5 overflow-x-auto mx-auto">
        {movies.map((movie, index) => {
          if (index < 6) {
            return <MovieCard key={index} {...movie} />;
          }
          return null;
        })}
      </div>
    </>
  );
};

export default TopRated;
