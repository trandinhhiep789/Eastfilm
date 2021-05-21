import React, { useEffect, useState } from "react";

import { LISTFILM_API, TOPRATED_FILM_API } from "../redux/const/MoviesConst";
import { SEARCH_API } from "../redux/const/MoviesConst";

import axios from "axios";

// thư viện antd
import "antd/dist/antd.css";
import { Tabs } from "antd";
import Movies from "./Movies";
const { TabPane } = Tabs;

export default function Body() {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [search, setSearch] = useState([]);

  //GET LIST FILM
  useEffect(() => {
    // fetch(LISTFILM_API)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     alert("có vô day");
    //     console.log(data);
    //     setMovies(data.results);
    //   });

    const promise = axios({
      url: LISTFILM_API,
      method: "GET",
    });
    promise.then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  }, []);

  //GET LISTPHIM TOP RATE (TRENDING)
  useEffect(() => {
    const promise = axios({
      url: TOPRATED_FILM_API,
      method: "GET",
    });
    promise.then((res) => {
      console.log(res.data);
      setTopMovies(res.data.results);
    });
  }, []);

  // submit information for search
  const submit = (e) => {
    e.preventDefault();

    if (search) {
      //   fetch(SEARCH_API + search)
      //     .then((res) => res.json())
      //     .then((data) => {
      //       alert("có vô day");
      //       console.log(data);
      //       setMovies(data.results);
      //     });
      const promise = axios({
        url: SEARCH_API + search,
        method: "GET",
      });
      promise.then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
      });

      setSearch("");
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="">
      <div>
        <nav className="navbar navbar-light bg-light p-0">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img
                src="/img/logo.png"
                style={{ width: "40%", height: "40%" }}
              />
            </a>
            <form className="d-flex" onSubmit={submit}>
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={handleChange}
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>

      <Tabs defaultActiveKey="2">
        <TabPane tab="Trending" key="0">
          <div className="ListFilm">
            {topMovies?.length > 0 &&
              topMovies?.map((m) => <Movies key={m.id} {...m} />)}
          </div>
        </TabPane>
        <TabPane tab="All Movies" key="2">
          <div className="ListFilm">
            {movies?.length > 0 &&
              movies?.map((m) => <Movies key={m.id} {...m} />)}
          </div>
        </TabPane>
        <TabPane tab="Actions" key="3" disabled>
          Actions
        </TabPane>
        <TabPane tab="Crime" key="4" disabled>
          Crime
        </TabPane>
        <TabPane tab="Comedy" key="5" disabled>
          Comedy
        </TabPane>
      </Tabs>
    </div>
  );
}
