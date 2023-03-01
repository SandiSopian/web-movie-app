import React, { useEffect, useState } from "react";
import tmdb from "@/pages/api/tmdb";
import MovieCard from "./MovieCard";
import Link from "next/link";

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
        <Link href="/popular">See all</Link>
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

export default Popular;
