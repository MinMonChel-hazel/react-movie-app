import React from "react";
import ReateStar from "../../assets/star.png";

export default function MovieCard({ movie }) {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      className="cursor-pointer movie_card"
      target="_blank"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="rounded-xl movie_poster"
      />
      <div className="movie_details col-span-4 space-y-1">
        <h3 className="text-[#43d0ec] text-[20px] font-semibold">
          {movie.original_title}
        </h3>
        <div className="flex justify-between items-center text-white text-[14px]">
          <p>{movie.release_date}</p>
          <p className="flex items-center gap-1">
            {movie.vote_average}
            <img src={ReateStar} className="w-4.5 h-4.5" />
          </p>
        </div>
        <p className="text-gray-400 text-[13px]">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </a>
  );
}
