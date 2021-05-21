import React, { useEffect, useState } from "react";
import axios from "axios";

import { IMG_API } from "../redux/const/MoviesConst";
import { DETAIL_FILM_API, API_KEY, LANGUAGE } from "../redux/const/MoviesConst";

export default function MoviesDetail({ match }) {
  let params = match.params;
  const [detail, setDetail] = useState([]);

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
    setDetail(data);
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
              <h3>{detail.title}</h3>
              <div className="d-flex" style={{opacity:'0.8'}}>
                <p className="mr-3">{detail.release_date}</p>
                <p>{detail.original_language}</p>
              </div>
              <p style={{ fontWeight: "400" }}>{detail.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
