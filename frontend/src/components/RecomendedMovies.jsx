import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const RecomendedMovies = ({ movieTitles }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjNlMzM3MWM5MzQ4ODk5NTBkZGI0OGZjYzNiZDljMCIsIm5iZiI6MTc4OTkzNzA1OC44MTUsInN1YiI6IjZhYjA0NWEyY2Y5MzY2OTI3YjllZGE5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s13-mKNMUciwmKtK16SaqcGCjvZNl1fEW8beD8NTdw4",
    },
  };

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovie = async (title) => {
    const encodedTitle = encodeURIComponent(title);
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodedTitle}&include_adult=false&language=en-US&page=1`;

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      return data.results?.[0] || null;
    } catch (error) {
      console.log("Error fetching movie: ", error);
      return null;
    }
  };

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      const results = await Promise.all(
        movieTitles.map((title) => fetchMovie(title)),
      );
      setMovies(results.filter(Boolean));
      setLoading(false);
    };

    if (movieTitles?.length) {
      loadMovies();
    }
  }, [movieTitles]);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(movies);
  return (
    <div className="grid grid-cols-2 md:grid-col-5 gap-4 ">
      {movies.map((movie) => (
        <Link
          to={`/movi/${movie.id}`}
          key={movie.id}
          className="bg-[#232323] rounded-lg overflow-hidden"
        >
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              className="w-full h-48 object-cover"
            />
          ) : (
            <>No Image</>
          )}

          <div className="p-2 ">
            <h3 className="text-sm font-semibold text-white truncate">
              {movie.title}
            </h3>
            <p className="text-sm text-gray-400">
              {movie.release_date ? movie.release_date.slice(0, 4) : "N?A"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecomendedMovies;
