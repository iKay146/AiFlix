import React, { useEffect, useState } from "react";
import Carding from "../assets/Cardimg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router";

const CardList = ({ title, category }) => {
  const [data, setData] = useState([]);
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
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-white md:px-4 ">
      <h2 className="pt-10 pb-5 text-lg font-medium">{title}</h2>
      <Swiper SlidesPerView={"auto"} spaceBetween={10} className="mySwiper">
        {data.map((item, index) => (
          <SwiperSlide key={index} className="max-w-72">
            <Link to={`/movie/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt=""
                className="h-44 w-full object-center object-cover"
              />
              <p className="text-center pt-2">{item.original_title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
