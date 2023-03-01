import React, { useEffect, useState } from "react";
import tmdb from "@/pages/api/tmdb";
import MovieCard from "../MovieCard";
import Layout from "@/components/Layout/Layout";

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
    <Layout>
      <div className="font-bold text-xl text-center p-4">
        <h1>Now Playing</h1>
        <hr />
      </div>

      <div className="flex pb-5 px-5 flex-wrap mx-auto gap-4">
        {movies.map((movie, index) => {
          return <MovieCard key={index} {...movie} />;
        })}
      </div>
    </Layout>
  );
};

export default NowPlaying;
