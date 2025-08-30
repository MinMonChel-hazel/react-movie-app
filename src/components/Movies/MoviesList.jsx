import React, { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import Popular from "../../assets/fire.png";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
    // const resData = fetch(
    //   "https://api.themoviedb.org/3/movie/popular?api_key=a44c33acdb4d4bb43a6290daabfe5c24"
    // )
    //   .then((res) => res.json())
    //   .then((data) => data.results);
    // setMovies(resData);
  }, []);

  const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a44c33acdb4d4bb43a6290daabfe5c24"
    );
    const data = await res.json();
    setMovies(data.results);
  };

  return (
    <section>
      <div className="px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-semibold text-white">Popular</h3>
          <img src={Popular} alt="" className="w-6 h-6" />
        </div>
        <div className="flex gap-4 items-center">
          <a href="" className="active text-white font-semibold">
            8+ Star
          </a>
          <a href="" className="text-white">
            7+ Star
          </a>
          <a href="" className="text-white">
            6+ Star
          </a>

          <select className="shadow-md bg-white rounded-md px-2 py-1">
            <option value="">Sort by</option>
            <option value="rating">Rating</option>
            <option value="year">Year</option>
          </select>

          <select className="shadow-md bg-white rounded-md px-2 py-1">
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <div className="px-4 py-2 grid gap-4 md:gap-10 xl:gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
