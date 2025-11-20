import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/HomePageHeader";
import TrendingMovies from "../components/TrendingMoviesSlider";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <TrendingMovies />
      <Footer />
    </>
  );
}
