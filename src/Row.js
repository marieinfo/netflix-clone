import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchurl, islargerow }) {
  const baseurl = "https://image.tmdb.org/t/p/original/";
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    //if [ ] run once when the row loads, and dont run again
    async function fetchData() {
      const urls = `https://api.themoviedb.org/3${fetchurl}`;
      const request = await axios.get(urls);
      //  console.log(request);
      setmovies(request.data.results);
      //  console.log(request.data.results);
      //console.table(movies);
      return request;
    }
    fetchData();
  }, [fetchurl]); //when we use async all variable on le met entre []
  //option pour video
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  //onclick
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); //pour recupéréer le id d'une video ytb
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // const urlsss=`${baseurl}${movies.poster_path}`;
  // console.log(urlsss);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {/* {movies.length==0?"no":<h2>{}</h2>}  */}
        {
          // hadi treturni brk w illa bghiti diri fiha blosck of code diri haka

          movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              className={`row_poster ${islargerow && "row_poster_large"}`}
              key={movie.id}
              src={`${baseurl}${
                islargerow ? movie.poster_path : movie.backdrop_path
              }`}
            />
          ))
        }
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
