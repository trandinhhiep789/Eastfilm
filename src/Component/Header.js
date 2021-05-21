import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light p-0">
        <div className="container-fluid">
          <a className="navbar-brand"><img src="/img/logo.png" style={{width:'40%', height:'40%'}}/></a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
