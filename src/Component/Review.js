import React from "react";
import { IMG_API } from "../redux/const/MoviesConst";

export default function Review({avata, author, updated_at, content }) {
  console.log(avata);
//   console.log(avata.indexOf('com'))
  console.log(author);
  return (
    <div>
      <div className="d-flex">
        <img
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}

          src={
            avata != null?
            avata.indexOf('com') == -1 
              ? (IMG_API + avata)
              : avata.slice(1):"https://images.unsplash.com/photo-1575919220112-0d5a2dc6a4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          }
        />
        <div>
          <h6>{author}</h6>
          <p>{updated_at}</p>
        </div>
      </div>
      <div>
          <p>{ content}</p>
      </div>
    </div>
  );
}
