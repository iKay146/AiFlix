import { Bookmark, Play } from "lucide-react";
import HeroBg from "../assets/herobg2.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router";
const Hero = () => {
  const [movie, setMovie] = useState(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjNlMzM3MWM5MzQ4ODk5NTBkZGI0OGZjYzNiZDljMCIsIm5iZiI6MTc4OTkzNzA1OC44MTUsInN1YiI6IjZhYjA0NWEyY2Y5MzY2OTI3YjllZGE5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s13-mKNMUciwmKtK16SaqcGCjvZNl1fEW8beD8NTdw4",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options,
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * res.results.length);
          setMovie(res.results[randomIndex]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!movie) {
    return <p className="text-white">Loading...</p>;
  }
  return (
    <div className="text-white relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="image"
        className="w-full rounded-2xl h-[480px] object-center object-cover"
      />{" "}
      {/*<div><h1 className="text-4xl font-bold">{movie.title}</h1></div>*/}
      <div className="flex space-x-2 md:space-x-4 absolute bottom-3 left-4 md:bottom-8 md:left-10 font-medium">
        <button className="flex justify-center items-center bg-white hover-bggray-200 text-[#e50914] py-3 px-4 rounded-full cursor-pointer text-sm md:text-base">
          <Bookmark className="mr-2 w-4 h-5 md:w-5 md:h-5" />
          Save for later
        </button>
        <Link to={`/movie/${movie.id}`}>
          <button className="flex justify-center items-center bg-[#e50914] hover-bg-ray-200 text-white py-3 px-4 rounded-full cursor-pointer text-sm md:text-base">
            <Play className="mr-2 w-4 h-4 md:w-5 md:h-5" />
            Watch Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
