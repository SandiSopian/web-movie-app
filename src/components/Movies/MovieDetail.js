import React, { useEffect, useState } from "react";
import tmdb from "@/pages/api/tmdb";
import MovieCard from "./MovieCard";
import Link from "next/link";
import { useRouter } from "next/router";

const MovieDetail = () => {
  const [title, setTitle] = useState("");
  const [originCountry, setOriginCountry] = useState("");
  const [runtime, setRuntime] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [voteAverage, setVoteAverage] = useState("");
  const [genre, setGenre] = useState("");
  const [overview, setOverview] = useState("");
  const [poster, setPoster] = useState("");
  const [similarMovies, setSimilarMovies] = useState([]);

  const router = useRouter();

  const getPosterURL = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get(`movie/${router.query.id}`);
      setTitle(data.title);
      setOriginCountry(data.production_companies[0].origin_country);
      setRuntime(data.runtime);
      setReleaseDate(data.release_date);
      setVoteAverage(data.vote_average);
      setGenre(data.genres[0].name);
      setOverview(data.overview);
      setPoster(data.poster_path);
    };
    fetchMovies();
  }, [router.query.id]);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      const { data } = await tmdb.get(`movie/${router.query.id}/similar`);
      setSimilarMovies(data.results);
    };
    fetchSimilarMovies();
  }, [router.query.id]);

  return (
    <>
      <div className="flex justify-between">
        <h1>Now Playing</h1>
        <Link href="/nowPlaying">See all</Link>
      </div>
      <hr />

      <div className="flex flex-col pb-5 px-5 overflow-x-auto mx-auto">
        <div>{title}</div>

        <hr />
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-2/12">
              <img src={getPosterURL(poster)} alt={title} className="w-[150px] h-[225px] shadow-sm rounded-md cursor-pointer" />
            </div>
            <div className="w-10/12 flex flex-col">
              <div>
                {originCountry}
                <span>|</span>
                {runtime}
                <span>|</span>
                {releaseDate}
              </div>

              <div>{voteAverage}</div>

              <div>{genre}</div>

              <div>{overview}</div>
            </div>{" "}
          </div>

          <div className="mt-5">
            <h2>Similar Movies</h2>
            <div className="flex overflow-x-auto">
              {similarMovies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
