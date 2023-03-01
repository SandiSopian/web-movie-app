import React from "react";

import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import UpComing from "./UpComing";

const MovieList = () => {
  return (
    <div className="flex flex-col gap-6 container mx-auto mt-8">
      <NowPlaying />
      <UpComing />
      <Popular />
      <TopRated />
    </div>
  );
};

export default MovieList;
