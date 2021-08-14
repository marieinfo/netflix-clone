import axios from "./axios";
import React, { useState, useEffect } from "react";
import request from "./requeste";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
  // pour changer de background a chaque fois quon refreche la page
  // fonction usestate: on precise que cete fonction ce fait une fois lorsque on refreche la page
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(request.fetchNetflixOriginals);
      console.log(req);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      //return an array so we wil select rundomly one movie with passing a rundom number in parameter on array with math function
      return req;
    }
    fetchData();
  }, []);
  // console.log("zoozi movie");
  // console.log(movie);
  function truncate(str, n) {
    return str?.lenght > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path} ")`,
        backgroundPosition: "center",
      }}
    >
      <div className='banner_content'>
        <h1 className='banner_title' style={{ color: "white" }}>
          {movie.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='benner_button'>Play </button>
          <button className='benner_button'>My List</button>
        </div>
        <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
        <div className='banner_fadebottom'></div>
      </div>
    </header>
  );
}

export default Banner;
