import React from "react";
import HomePageHeader from "../components/HeaderForHomePage";
import MovieCardSlider from "../components/MovieCardSlider";
import TvShowCardSlider from "../components/TvShowCardSlider";

export default function Home() {
  return (
    <>
      <HomePageHeader />
      <MovieCardSlider type={"trending"} />
      <MovieCardSlider type={"upcoming"} bg={"yes"} />
      <TvShowCardSlider type={"airing today"} />
      <TvShowCardSlider type={"now playing"} bg={"yes"} />
    </>
  );
}
