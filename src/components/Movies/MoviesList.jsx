import React, { use, useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import _, { set } from "lodash";

export default function MoviesList({ type, title, emoji }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

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
      `https://api.themoviedb.org/3/movie/${type}?api_key=a44c33acdb4d4bb43a6290daabfe5c24`
    );
    const data = await res.json();
    setMovies(data.results);
    setFilteredMovies(data.results);
  };

  let ratings = [8, 7, 6];
  const onRatingClick = (r) => {
    if (r === rating) {
      setRating(0);
      setFilteredMovies(movies);
    } else {
      setRating(r);

      const filtered = movies.filter((movie) => movie.vote_average >= r);
      setFilteredMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filteredMovies, [sort.by], [sort.order]);
      setFilteredMovies(sortedMovies);
    }
  }, [sort]);

  return (
    <section id={type}>
      <div className="px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="#" className="cursor-pointer">
            <h3 className="text-2xl font-semibold">{title}</h3>
          </a>
          <img src={emoji} alt={`${type} icon`} className="w-6 h-6" />
        </div>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-4">
            {ratings.map((rate) => (
              <li
                className={`cursor-pointer ${
                  rating === rate ? "movie_filtered_item" : ""
                }`}
                onClick={() => onRatingClick(rate)}
              >
                {rate}+ Star
              </li>
            ))}
          </ul>

          <select
            name="by"
            onChange={handleSort}
            value={sort.by}
            className="shadow-md bg-white rounded-md px-2 py-1"
          >
            <option value="default">Sort by</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            onChange={handleSort}
            value={sort.order}
            className="shadow-md bg-white rounded-md px-2 py-1"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <div className="px-4 py-2 grid gap-4 md:gap-10 xl:gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
