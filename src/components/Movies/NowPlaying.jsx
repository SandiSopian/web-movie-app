import React, { useEffect, useState } from "react";
import tmdb from "@/pages/api/tmdb";
import MovieCard from "./MovieCard";
import Link from "next/link";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get("movie/now_playing");
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <h1>Now Playing</h1>
        <Link href="/nowPlaying">See all</Link>
      </div>
      <hr />

      <div className="flex pb-5 px-5 overflow-x-auto mx-auto">
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

export default NowPlaying;
