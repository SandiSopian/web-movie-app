import React from "react";
import User from "./User/UserControl";
import Layout from "./Layout/Layout";
import MovieList from "./Movies/MovieList";

const Home = () => {
  return (
    <Layout>
      <User />
      <MovieList />
    </Layout>
  );
};

export default Home;
