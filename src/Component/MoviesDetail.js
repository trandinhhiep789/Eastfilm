import React, { useEffect, useState } from "react";
import axios from "axios";

import { IMG_API } from "../redux/const/MoviesConst";
import { DETAIL_FILM_API, API_KEY, LANGUAGE } from "../redux/const/MoviesConst";
import { REVIEW_MOVIES_API } from "../redux/const/MoviesConst";
import MoviesRecom from "./MoviesRecom";
import Review from "./Review";

export default function MoviesDetail({ match }) {
  let params = match.params;
  const [detail, setDetail] = useState([]);
  const [review, setReview] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  //GET DETAIL FILM
  useEffect(async () => {
    // const promise = axios({
    //     url: DETAIL_FILM_API + params.id + API_KEY + LANGUAGE,
    //     method: "GET",
    //   });
    //   promise.then(res => {
    //     alert("có vô day");
    //     console.log(res.data);
    //     setDetail(res.data.results);
    //   });
    const { data } = await axios.get(`${DETAIL_FILM_API}${params.id}`, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    });
    console.log("data detail");
    console.log(data);
    setDetail(data);
  }, [params.id]);

  // GET REVIEW DETAIL
  useEffect(async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=1655d3d1a307fb3a0c535d85dca0d795&language=en-US&page=1`
    );

    console.log("data reviews");
    console.log(data);
    setReview(data);
  }, [params.id]);

  //GET MOVIES RECOMMENDATION
  useEffect(async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=1655d3d1a307fb3a0c535d85dca0d795&language=en-US&page=1`
    );

    console.log("data similar");
    console.log(data);
    setRecommendations(data);
  }, [params.id]);

  return (
    <div className="row">
      <div className="col text-center" style={{ width: "100%" }}>
        <img
          style={{ width: "100%" }}
          src={IMG_API + detail.backdrop_path}
          alt={detail.title}
        />

        <div className="container">
          <div className="row  detailContent">
            <img
              className="col-md-4 smallPicture"
              src={
                detail.poster_path
                  ? IMG_API + detail.poster_path
                  : "https://images.unsplash.com/photo-1575919220112-0d5a2dc6a4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              }
              alt={detail.title}
            />
            <div className="col-md-8 text-left container">
              <div className="d-flex">
                {detail.genres?.length > 0 &&
                  detail.genres?.map((r) => (
                    <p className="p-2 m-2 border text-center rounded-pill">
                      {r.name}
                    </p>
                  ))}
              </div>
              <h3>{detail.title}</h3>
              <div className="d-flex" style={{ opacity: "0.8" }}>
                <p className="mr-3">{detail.release_date}</p>
                <p>{detail.original_language}</p>
              </div>
              <p style={{ fontWeight: "400" }}>{detail.overview}</p>
            </div>
          </div>
          <div className="review container text-left">
            <h3 className="p-4" style={{ fontWeight: "500" }}>
              Review
            </h3>
            <div className="review_content">
              {review.results?.length > 0 &&
                review.results
                  ?.map((r) => <Review avata={r.author_details.avatar_path} {...r}/>)}
            </div>
            <h3 className="p-4" style={{ fontWeight: "500" }}>
              More like this
            </h3>
            <div className="ListFilm">
              {recommendations.results?.length > 0 &&
                recommendations.results
                  ?.slice(0, 6)
                  .map((m) => <MoviesRecom key={m.id} {...m} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
