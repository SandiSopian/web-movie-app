import React, { useEffect, useState } from "react";
import tmdb from "@/pages/api/tmdb";
import MovieCard from "./MovieCard";
import Link from "next/link";

const UpComing = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get("/movie/upcoming");
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <h1>Up Coming</h1>
        <Link href="/upComing">See all</Link>
      </div>
      <hr />

      <div className="flex pb-2 px-5 overflow-x-auto mx-auto">
        {movies.map((movie, index) => {
          if (index < 7) {
            return <MovieCard key={index} {...movie} />;
          }
          return null;
        })}
      </div>
    </>
  );
};

export default UpComing;
