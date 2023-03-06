import React from "react";
import Link from "next/link";

const getPosterURL = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`;
};

const MovieCard = ({ id, poster_path, title, release_date }) => {
  return (
    <Link href={`/movie/${id}`}>
      <div className="flex flex-col pl-5 gap-2">
        <img src={getPosterURL(poster_path)} alt={title} className="w-[150px] h-[225px] shadow-sm rounded-md cursor-pointer" />
        <div className="flex flex-col px-3 w-[150px]">
          <h1 className="font-bold">{title}</h1>
          <p className="font-normal text-slate-500">{release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
