import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Detail = () => {
  const movie = useSelector((state) => state.movies.selected);
  return (
    <div className="w-full h-screen relative">
      <Link to='/home' className="absolute top-4 left-3" >
      <i class="fa-solid fa-backward"/>BACK
      </Link>
      <Header />
      <div className="flex mt-6 justify-center items-center ">
        <div className="flex flex-wrap border-spacing-2 py-2 justify-center items-center ml-24 w-1/2 bg-gray-200 rounded-md shadow-xl">
          <img src={movie.Poster} />
          <div className="pl-5">
            <h1>
              <span className="text-red-800 font-bold break-words">Title:</span>
              {movie.Title}
            </h1>
            <br />
            <h3>
              {" "}
              <span className="text-red-800 font-bold">Year:</span>
              {movie.Year}
            </h3>
            <br />
            <h5>
              <span className="text-red-800 font-bold">imdbID:</span>
              {movie.imdbID}
            </h5>
            <br />
            <p>
              {" "}
              <span className="text-red-800 font-bold">Type:</span>
              {movie.Type}
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
